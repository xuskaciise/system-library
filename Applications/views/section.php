
<?php
include("./header.php");
include("./sidebar.php");
?>


    
<div class="pcoded-content">
                        <div class="pcoded-inner-content">
                            <div class="main-body">
                                <div class="page-wrapper">

                                    <div class="page-body">
                                        <div class="row">
                                        <div class="col-sm-12">
                                        <div class="card">
                                            <div class="card-header">
                                                <h5>Student </h5>
                                               <button class="btn btn-success float-end btn-round" id="addnew"><i class="fa fa-plus"></i></button>
                                                <div class="card-header-right">
                                                    <ul class="list-unstyled card-option">
                                                        <li><i class="feather icon-maximize full-card"></i></li>
                                                        <li><i class="feather icon-minus minimize-card"></i></li>
                                                       
                                                    </ul>
                                                </div>
                                                
                                            </div>
                                            <div class="card-block">
                                                <div class="dt-responsive table-responsive">
                                                    <table id="basic-col-reorder" class="table  table-bordered nowrap sectionTable">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Name</th>
                                                                <th>Number</th>
                                                                <th>Description</th>
                                                                <th>Book Case</th>
                                                                <th>User</th>
                                                                <th>Date</th>
                                                                <th>Action</th>
                                                                
                                                            </tr>
                                                        </thead>
                                                       <tbody>

                                                       </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div id="styleSelector">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="modal" tabindex="-1" id="sectionModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Section</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <form id="sectionFrom">
        <div class="row">
        <div class="col-12">
        <div class="alert alert-success background-success d-none">
           
        </div>
        <div class="alert alert-danger background-danger d-none">
        
    </div>
        </div>
        <input type="hidden" id="update_id" name="update_id">
            <div class="col-12">
         
                <label for="">Section Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Enter Student Name" required>
                <label for="">Number</label>
                <input type="text" name="number" id="number" class="form-control" placeholder="Enter Student Name" required>
                <label for="">Description</label>
                <input type="text" name="description" id="description" class="form-control" placeholder="Enter Your Description" required>
                <label for="">Bookcase</label>
                <select name="c_id" id="c_id" class="form-control">
               
                
          
             </select>
                
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="modalClose">Close</button>
        <button type="submit" class="btn btn-primary">Save Section</button>
    </form>
      </div>
    </div>
  </div>
</div>


<?php
include("./script.php");

?>
<script src="../js/section.js"></script>