<?php

include("../config/conn.php");



function Dashboard($conn){
    $data=array();
    extract($_POST);
    $query="CALL dashboard";
    $result=$conn->query($query);
    if($result){
        $row=$result->fetch_assoc();
    

        $data=array("status"=>true,"data"=>$row);


    }else{
        $data=array("status"=>false,"data"=>$conn->error);


    }

    echo json_encode($data);
        
}

























 if(isset($_POST['action'])){
    $action=$_POST['action'];
    $action($conn);
 }else{
    echo json_encode(array("status" =>false,"data"=>"action Required"));
 }




?>