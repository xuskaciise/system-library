
<?php
session_start();
include("../config/conn.php");





function adddepartment($conn){
  
    $data=array();
    extract($_POST);
    $query="INSERT INTO `department`(`name`, `description`) VALUES ('$name','$description')";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"Students Added Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}
function Readdepartment($conn){
    $data=array();
    $data_array=array();
    extract($_POST);
    $query="SELECT * FROM department";
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
function Feachdepartment($conn)
{
    $data = array();
    extract($_POST);

    $query = "SELECT * FROM `department` WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $row = $result->fetch_assoc();
        $data = array("status" => true, "data" => $row);
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}
function Updatedepartment($conn){
    $data=array();
    extract($_POST);
    $query="UPDATE `department` SET `name`='$name',`description`='$description' WHERE id='$update_id' ";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"updated Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);

}
function Deletedepartment($conn)
{
    extract($_POST);
    $data = array();
    $query = "DELETE FROM department WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $data = array("status" => true, "data" => "Deleted successfully ");
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}





if(isset($_POST['action'])){
    $action=$_POST['action'];
    $action($conn);
}else{
    echo json_encode(array("status"=>false,"data"=>"action required"));
}








?>