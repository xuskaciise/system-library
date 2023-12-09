// btnAction="insert";
// ReadData();

// $("#addNew").on("click", function () {
//     $("#studentModal").modal("show");
// })

// $("#studentFrom").on("submit", function(e){
//     e.preventDefault();
//     let formdata=new FormData($("#studentFrom"));
//     let update_id=$("#update_id").val();
//     if(btnAction=="insert"){

//         formdata.append("action","addstudent");
      

//     }else{
       
//          formdata.append("action","UpdateStudent");
//     }


//     $.ajax({
//         method: "POST",
//         dataType: "json",
//         url:"../api/students.php",
//         data:data,
//         processData:false,
//         contentType:false,
//         success: function(data){
//             let status=data.status;
//             let response=data.data;

//             if(status){
//                 btnAction="insert";
//                 ReadData();
//                 DisplayMassege("success",response);
               
                
               

//             }else{
//                 DisplayMassege("danger",response);
//             }


//         },error:function(data){
//             console.log(data.responseText);

//         }

//     })
// })


// function ReadData(){
//     $(".studentTable tbody").html("");

//     let data={
//         "action": "ReadStudents"


//     }

//     $.ajax({
//         method: "POST",
//         dataType: "json",
//         url:"../api/students.php",
//         data:data,

//         success: function(data){
//             let status=data.status;
//             let response=data.data;
//             let html="";

//             if(status){
//                 html+=`<tr>`
//                 response.forEach( res=> {
               
//                    for(let i in res){
//                           html+=`<td>${res[i]}</td>`
                          
    
//                    }
//                    html+=`
//                    <td>
//                    <a class="btn btn-success text-light update_info" update_id='${res['id']}'><i class="fa fa-edit"></i></a>
//                    <a class="btn btn-danger  text-light delete_info" delete_id='${res['id']}' ><i class="fa fa-trash"></i></a>
//                    </td>
                   
//                    `

//                    html+=`</tr>`
                  

//                 })
//                 $(".studentTable").append(html);
//                 $("#DataTable").DataTable();
                
//             }else{
//                 alert(response)

//             }


//         },error:function(data){
//             console.log(data.responseText);

//         }

//     })

// }





// function Feachstudent(id){
//     let data={
//         "id":id,
//         "action":"Feachsudent"
        
//     }

//     $.ajax({
//         method:"POST",
//         dataType:"json",
//         url:"../api/students.php",
//         data:data,

//         success:function(data){
//             let status= data.status;
//             let response=data.data;
//             if(status){
              
//                 btnAction="update";
//                 $("#update_id").val(response['id'])
//                 $("#name").val(response['name']);
//                 $("#phone").val(response['phone']);
//                 $("#address").val(response['address']);
//                 $("#email").val(response['email']);
//                 $("#gender").val(response['gender']);
//                 $("#age").val(response['age']);
//                 $("#studentModal").modal("show")
            
//             }else{

//                 console.log(response);

//             }


//         },error:function(data){
//             console.log(data.responseText);

//         }

//     })

// }



// function Deletestudent(id){
//         let data={
//             "id":id,
//             "action":"Deletestudent",
            
//          }
//          $.ajax({
//             method:"POST",
//             dataType:"json",
//             url:"../api/students.php",
//             data:data,
//             success:function(result){
//               let status=result.status;
//               let response=result.data;
//               console.log(response);
//               if(status){
                
               
//                 ReadData();
                
                
    
              
//               }else{
                 
//                 swal("Oops...", ressponse, "error")
      
//               }
           
             
              
//             },error:function(result){
//               console.log(result.responseText);
      
//             }
      
//          })
    
//         }
        
  
        

// function DisplayMassege(type,message){
//     let success=document.querySelector(".alert-success");
//     let danger=document.querySelector(".alert-danger");

//     if(success){
//         success.classList="alert alert-success background-success";
//         success.innerHTML=message;

//         setTimeout(function(){
//             $("#studentFrom")[0].reset();
//             $("#studentModal").modal("hide");
//             success.classList="alert alert-success background-success d-none";

//         },2000);
//     }
//     else{
//         danger.classList="alert alert-danger background-danger";
//         danger.innerHTML=message;

       

//     }

// }





// $(".studentTable tbody").on("click","a.delete_info",function(){
//     let id=$(this).attr("delete_id");
    
//     swal({
//         title: "Are you sure?",
//         text: "Are you sure you want to dalete!",
//         type: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#DD6B55",
//         confirmButtonText: "Yes, delete it!",
//         closeOnConfirm: false
//       },
//       function(){
//         swal("Deleted!", "deleted Successfully .", "success");
//         Deletestudent(id);
       
//       });
// })

// $(".studentTable tbody").on("click","a.update_info",function(){
//     let id=$(this).attr("update_id");
//     Feachstudent(id);
// });

Readbookcase();
btnAction="Insert";
ReadStudents();
$("#addnew").on("click",function(){
    $("#studentModal").modal("show");
})
$("#studentFrom").on("submit",function(e){
    e.preventDefault();
    let data="";
     data=new FormData($("#studentFrom")[0]);
    if(btnAction=="Insert"){
     data=new FormData($("#studentFrom")[0]);
    data.append("action","addstudent")
    }else{
         data=new FormData($("#studentFrom")[0]);
        data.append("action","UpdateStudent")
    }
  
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/students.php",
        data:data,
        contentType:false,
        processData:false,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                alert("success",response)
                ReadStudents()
                btnAction="Insert";
            }else{
                alert("danger",response)
            }

        },error:function(data){
            alert("danger",data.responseText)
        }
    })
})
 function ReadStudents(){
    $(".studentTable tbody").html("");
    let data={
        "action":"ReadStudents"
        
    }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/students.php",
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
                    $(".studentTable tbody").append(html);
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
 function Feachsudent(id){
  let data={
    "action":"Feachsudent",
    "id":id
  }
    $.ajax({
        method:"POST",
        dataType:"JSON",
        url:"../api/students.php",
        data:data,
        success:function(data){
            let status=data.status;
            let response=data.data;
            if(status){
                btnAction="update";
                $("#update_id").val(response['id'])
                $("#name").val(response['name']);
                $("#phone").val(response['phone']);
                $("#address").val(response['address']);
                $("#email").val(response['email']);
                $("#sex").val(response['sex']);
                $("#age").val(response['age']);
                 $("#studentModal").modal("show")
            }else{
               console.log(response);
            }

        },error:function(data){
           console.log(data.responseText);
        }
    })
}
 
function Deletestudent(id){
    let data={
      "action":"Deletestudent",
      "id":id   
     
    }
      $.ajax({
          method:"POST",
          dataType:"JSON",
          url:"../api/students.php",
          data:data,
          success:function(data){
              let status=data.status;
              let response=data.data;
              if(status){
                ReadStudents();
              }else{
                 console.log(response);
              }
  
          },error:function(data){
             console.log(data.responseText);
          }
      })
}
function Readbookcase(){
    $("#c_id").html("");
    let data={
        "action":"ViewGenratedId"
    }
    $.ajax({
         method:"POST",
         dataType:"json",
         url:"../api/students.php",
         data:data,
         success:function(data){
          let  status=data.status;
          let response=data.data;
          let html="";
          if(status){
         
            $("#student_id").val(response)
            console.log(response)
          }else{
            console.log(response);
          }
         },error:function(data){
            console.log(data.responseText);

         }
    })
}
   

 $(".studentTable tbody").on("click","a.update_info",function(){
    let id=$(this).attr("update_id");
   
    Feachsudent(id)
 })
 $(".studentTable tbody").on("click","a.delete_info",function(){
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
          
        Deletestudent(id)
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
            $("#studentFrom")[0].reset()
            $("#studentModal").modal("hide");
            window.location.reload()
            success.classList="alert alert-success background-success d-none"

        },2000)
    }else{
        danger.classList="alert alert-danger background-danger";
        danger.innerHTML=messege;

    }
}