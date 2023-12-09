
<?php
session_start();
include("../config/conn.php");





function addbookcase($conn){
  
    $data=array();
    extract($_POST);
    $query="call create_bookcase('$name','$number','$description','1')";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"bookcase Added Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}
function Readbookcase($conn){
    $data=array();
    $data_array=array();
    extract($_POST);
    $query="SELECT * FROM bookcase";
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
function Feachbookcase($conn)
{
    $data = array();
    extract($_POST);

    $query = "SELECT * FROM `bookcase` WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $row = $result->fetch_assoc();
        $data = array("status" => true, "data" => $row);
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}
function Updatebookcase($conn){
    $data=array();
    extract($_POST);
    $query="UPDATE `bookcase` SET `name`='$name',`number`='$number',`description`='$description' WHERE id='$update_id' ";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"updated Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);

}
function Deletebookcase($conn)
{
    extract($_POST);
    $data = array();
    $query = "DELETE FROM bookcase WHERE id='$id'";
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