
<?php
session_start();
include("../config/conn.php");





function addsection($conn){
  
    $data=array();
    extract($_POST);
    $query="call create_section('$name','$number','$description','$c_id','1')";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"bookcase Added Successfully");


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}
function Readsection($conn){
    $data=array();
    $data_array=array();
    extract($_POST);
    $query="SELECT s.id id,s.`name`,s.`number`,s.description,b.name bookcase,s.`user_id`,s.`date`  
    FROM `section` s join bookcase b on s.c_id=b.id";
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
function Feachsection($conn)
{
    $data = array();
    extract($_POST);

    $query = "SELECT * FROM `section` WHERE id='$id'";
    $result = $conn->query($query);
    if ($result) {
        $row = $result->fetch_assoc();
        $data = array("status" => true, "data" => $row);
    } else {
        $data = array("status" => false, "data" => $conn->error);
    }
    echo json_encode($data);
}
function Updatesection($conn){
    $data=array();
    extract($_POST);
    $query="UPDATE `section` SET `name`='$name',`number`='$number',`description`='$description' WHERE id='$update_id'";
    $result=$conn->query($query);
    if($result){
        $data=array("status"=>true,"data"=>"updated Successfully");
    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);

}
function Deletesection($conn)
{
    extract($_POST);
    $data = array();
    $query = "DELETE FROM section WHERE id='$id'";
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