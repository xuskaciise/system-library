
btnAction="Insert";
Readcategory();
$("#addnew").on("click",function(){
    $("#categoryModal").modal("show");
})
$("#categoryFrom").on("submit",function(e){
    e.preventDefault();
    let data="";
     data=new FormData($("#categoryFrom")[0]);
    if(btnAction=="Insert"){
     data=new FormData($("#categoryFrom")[0]);
    data.append("action","addcategory")
    }else{
         data=new FormData($("#categoryFrom")[0]);
        data.append("action","Updatecategory")
    }
  
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/category.php",
        data:data,
        contentType:false,
        processData:false,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                alert("success",response)
                Readcategory()
                btnAction="Insert";
            }else{
                alert("danger",response)
            }

        },error:function(data){
            alert("danger",data.responseText)
        }
    })
})
 function Readcategory(){
    $(".categoryTable tbody").html("");
    let data={
        "action":"Readcategory"
        
    }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/category.php",
        data:data,
        success:function(data){
            let status=data.status;
            let response=data.data;
            let html="";
            
            if(status){
                response.forEach(res=>{
                    html="<tr>";
                    for(let i in res){
                        html+=`<td>${res[i]}</td>`
                    }
                    html+=`<td >
                    <a class='btn btn-success btn-round update_info'update_id="${res['id']}"style='color:#fff'><i class="fa fa-edit"></i>
                
                    <a class='btn btn-danger btn-round delete_info' delete_id=${res['id']} style='color:#fff; margin-left:10px;'><i class="fa fa-trash"></i>
                    </td>`
                    html+="</tr>"
                    $(".categoryTable tbody").append(html);
                })
         
                $("#basic-col-reorder").DataTable();
            }else{
               console.log(response);
            }

        },error:function(data){
            console.log(data.responseText);
        }
    })
 }
 function Feachcategory(id){
  let data={
    "action":"Feachcategory",
    "id":id
  }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/category.php",
        data:data,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                btnAction="Update";
                $("#update_id").val(response['id'])
                $("#name").val(response['name']);
                 $("#categoryModal").modal("show")
            }else{
               console.log(response);
            }

        },error:function(data){
           console.log(data.responseText);
        }
    })
}
 
function Deletecategory(id){
    let data={
      "action":"Deletecategory",
      "id":id   
     
    }
      $.ajax({
          method:"POST",
          dataType:"JSON",
          url:"../api/category.php",
          data:data,
          success:function(data){
              let status=data.status;
              let response=data.data;
              if(status){
                Readcategory();
              }else{
                 console.log(response);
              }
  
          },error:function(data){
             console.log(data.responseText);
          }
      })
  }
   

 $(".categoryTable tbody").on("click","a.update_info",function(){
    let id=$(this).attr("update_id");
   
    Feachcategory(id)
 })
 $(".categoryTable tbody").on("click","a.delete_info",function(){
    let id=$(this).attr("delete_id");
    
    swal({
        title: "Are you sure?",
        text: "You will not be able to recover this imaginary file!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#fa3f1b",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        swal("Deleted!", "Deleted SuccessFully", "success");
          
        Deletecategory(id)
      });
    
 })




function alert(type,messege){
    let success=document.querySelector(".alert-success");
    let danger =document.querySelector(".alert-danger");
    if(type=="success"){
        success.classList="alert alert-success background-success";
        success.innerHTML=messege;
        danger.classList="alert alert-danger background-danger d-none";
        setTimeout(function(){
            $("#categoryFrom")[0].reset()
            $("#categoryModal").modal("hide");
            success.classList="alert alert-success background-success d-none"

        },2000)
    }else{
        danger.classList="alert alert-danger background-danger";
        danger.innerHTML=messege;

    }
}