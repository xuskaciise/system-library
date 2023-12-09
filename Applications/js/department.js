btnAction="Insert";
Readdepartment();
$("#addnew").on("click",function(){
    $("#departmentModal").modal("show");
})
$("#departmetFrom").on("submit",function(e){
    e.preventDefault();
    let data="";
     data=new FormData($("#departmetFrom")[0]);
    if(btnAction=="Insert"){
     data=new FormData($("#departmetFrom")[0]);
    data.append("action","adddepartment")
    }else{
         data=new FormData($("#departmetFrom")[0]);
        data.append("action","Updatedepartment")
    }
  
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/department.php",
        data:data,
        contentType:false,
        processData:false,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                alert("success",response)
                Readdepartment()
                btnAction="Insert";
            }else{
                alert("danger",response)
            }

        },error:function(data){
            alert("danger",data.responseText)
        }
    })
})
 function Readdepartment(){
    $(".departmentTable tbody").html("");
    let data={
        "action":"Readdepartment"
        
    }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/department.php",
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
                    $(".departmentTable tbody").append(html);
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
 function Feachdepartment(id){
  let data={
    "action":"Feachdepartment",
    "id":id
  }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/department.php",
        data:data,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                btnAction="Update";
                $("#update_id").val(response['id'])
                $("#name").val(response['name']);
                $("#description").val(response['description']);
                 $("#departmentModal").modal("show")
            }else{
               console.log(response);
            }

        },error:function(data){
           console.log(data.responseText);
        }
    })
}
 
function Deletedepartment(id){
    let data={
      "action":"Deletedepartment",
      "id":id   
     
    }
      $.ajax({
          method:"POST",
          dataType:"JSON",
          url:"../api/department.php",
          data:data,
          success:function(data){
              let status=data.status;
              let response=data.data;
              if(status){
                Readdepartment();
              }else{
                 console.log(response);
              }
  
          },error:function(data){
             console.log(data.responseText);
          }
      })
  }
   

 $(".departmentTable tbody").on("click","a.update_info",function(){
    let id=$(this).attr("update_id");
   
    Feachdepartment(id)
 })
 $(".departmentTable tbody").on("click","a.delete_info",function(){
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
          
        Deletedepartment(id)
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
            $("#departmetFrom")[0].reset()
            $("#departmentModal").modal("hide");
            success.classList="alert alert-success background-success d-none"

        },2000)
    }else{
        danger.classList="alert alert-danger background-danger";
        danger.innerHTML=messege;

    }
}