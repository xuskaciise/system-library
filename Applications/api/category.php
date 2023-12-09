
<?php
session_start();
include("../config/conn.php");





function addcategory($conn){
  
    $data=array();
    extract($_POST);
    $query="INSERT INTO `bookcategory`(`name`, `user_id`) VALUES ('$name','1')";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"category Added Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}
function Readcategory($conn){
    $data=array();
    $data_array=array();
    extract($_POST);
    $query="SELECT * FROM bookcategory";
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
function Feachcategory($conn)
{
    $data = array();
    extract($_POST);

    $query = "SELECT * FROM `bookcategory` WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $row = $result->fetch_assoc();
        $data = array("status" => true, "data" => $row);
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}
function Updatecategory($conn){
    $data=array();
    extract($_POST);
    $query="UPDATE `bookcategory` SET `name`='$name' WHERE id='$update_id' ";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"updated Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);

}
function Deletecategory($conn)
{
    extract($_POST);
    $data = array();
    $query = "DELETE FROM bookcategory WHERE id='$id'";
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