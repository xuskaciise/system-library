
<?php
session_start();
include("../config/conn.php");





function addstudent($conn){
    $ID=GenerateID($conn);
    $data=array();
    extract($_POST);
    $query="call create_students('$ID','$name','$sex','$address','$phone','$email','$age','1')";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"Students Added Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}
function ReadStudents($conn){
    $data=array();
    $data_array=array();
    extract($_POST);
    $query="SELECT * FROM students";
    $result=$conn->query($query);
    if($result){
       while($row=$result->fetch_assoc()){
        $data_array[]=$row;
       }

        $data=array("status"=>true,"data"=>$data_array);
       


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}
function Feachsudent($conn)
{
    $data = array();
    extract($_POST);

    $query = "SELECT * FROM `students` WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $row = $result->fetch_assoc();
        $data = array("status" => true, "data" => $row);
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}
function UpdateStudent($conn){
    $data=array();
    extract($_POST);
    $query="UPDATE `students` SET `name`='$name',`phone`='$phone',`sex`='$sex',`address`='$address',`email`='$email',`age`='$age' WHERE id='$update_id' ";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"updated Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);

}
function Deletestudent($conn)
{
    extract($_POST);
    $data = array();
    $query = "DELETE FROM students WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $data = array("status" => true, "data" => "Deleted successfully ");
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}

function ViewGenratedId($conn){
    $data = array();
    $id="";
    $query="SELECT * FROM students s ORDER BY s.id DESC LIMIT 1";
    $result=$conn->query($query);
    if($result){
        if(mysqli_num_rows($result)>0){
            $row=$result->fetch_assoc();
            $id= ++$row['id'];
           
        }else{
            $id="ID001";
        }
        
      

 }else{
$data=array("status"=>false,"data"=>$conn->error);
}
$data=array("status"=>true,"data"=>$id);

echo json_encode($data);
       
}




function GenerateID($conn){
    $data = array();
    $ID="";
    $query="SELECT * FROM students s ORDER BY s.id DESC LIMIT 1";
    $result=$conn->query($query);
    if($result){
        if(mysqli_num_rows($result)>0){
            $row=$result->fetch_assoc();
            $ID= ++$row['id'];
           
        }else{
            $ID="ID001";
        }
        $data=array("status"=>true,"data"=>$ID);
        

}else{
$data=array("status"=>false,"data"=>$conn->error);
}
  return $ID;
}



if(isset($_POST['action'])){
    $action=$_POST['action'];
    $action($conn);
}else{
    echo json_encode(array("status"=>false,"data"=>"action required"));
}








?>