
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
                                                    <table id="basic-col-reorder" class="table  table-bordered nowrap bookTable">
                                                        <thead>
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Book Name</th>
                                                                <th>Book Author</th>
                                                                <th>Book Edition</th>
                                                                <th>Book Publish</th>
                                                                <th>Book Cost</th>
                                                                <th>Book Description</th>
                                                                <th>Book ISBN</th>
                                                                <th>Book Quantity</th>
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
<div class="modal" tabindex="-1" id="bookModal">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Students</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
      <form id="bookFrom">
        <div class="row">
        <div class="col-12">
        <div class="alert alert-success background-success d-none">
           
        </div>
        <div class="alert alert-danger background-danger d-none">
        
    </div>
        </div>
        <input type="hidden" id="update_id" name="update_id">
            <div class="col-12">
         
                <label for="">Book Name</label>
                <input type="text" name="name" id="name" class="form-control" placeholder="Enter Student Name" required>
                <label for="">Book Author</label>
                <input type="text" name="author" id="author" class="form-control" placeholder="Enter student Phone" required>
                <label for="">Book Edition</label>
                <input type="text" name="edition" id="edition" class="form-control" placeholder="example@gmail.com" required>
             <label for="">Book Publish</label>
             <input type="text" name="publish" id="publish" class="form-control" placeholder="Enter Book Publish" required>  
             <label for="">Book Cost</label>
             <input type="text" name="cost" id="cost" class="form-control" placeholder="Enter Book Cost" required>  
             <label for="">Book ISBN</label>
             <input type="text" name="ISBN" id="ISBN" class="form-control" placeholder="Enter Book ISBN" required>  
             <label for="">Book Quantity</label>
             <input type="text" name="qty" id="qty" class="form-control" placeholder="Enter Book Quantity" required>  
             <label for="">Book Description</label>
             <textarea name="description" id="description" cols="100" rows="5" placeholder="Enter Your Description"></textarea>
            
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="modalClose">Close</button>
        <button type="submit" class="btn btn-primary">Save Book</button>
    </form>
      </div>
    </div>
  </div>
</div>


<?php
include("./script.php");

?>
<script src="../js/book.js"></script>