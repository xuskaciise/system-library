
<?php
session_start();
include("../config/conn.php");





function addbook($conn){
  
    $data=array();
    extract($_POST);
    $query="call create_book('$name','$author','$edition','$publish','$cost','$ISBN','$qty','$description','1')";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"book Added Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}
function Readbook($conn){
    $data=array();
    $data_array=array();
    extract($_POST);
    $query="SELECT * FROM book";
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
function Feachbook($conn)
{
    $data = array();
    extract($_POST);

    $query = "SELECT * FROM `book` WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $row = $result->fetch_assoc();
        $data = array("status" => true, "data" => $row);
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}
function Updatebook($conn){
    $data=array();
    extract($_POST);
    $query="UPDATE `book` SET `name`='$name',`author`='$author',`edition`='$edition',`publish`='$publish',`cost`='$cost',`ISBN`='$ISBN',`qty`='$qty',`description`='$description' WHERE id='$update_id' ";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"updated Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);

}
function Deletebook($conn)
{
    extract($_POST);
    $data = array();
    $query = "DELETE FROM book WHERE id='$id'";
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