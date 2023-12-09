
Dashboard();

function Dashboard(){
    let data={
        "action": "Dashboard"


    }

    $.ajax({
        method: "POST",
        dataType: "json",
        url:"../api/dashboard.php",
        data:data,

        success: function(data){
            let status=data.status;
            let response=data.data;
            let html="";
            if(status){
               
               
                    html=`
                    <div class="col-xl-3 col-md-6">
                    <div class="card bg-c-yellow update-card">
                        <div class="card-block">
                            <div class="row align-items-end">
                                <div class="col-8">
                                    <h4 class="text-white">${response['today']}</h4>
                                    <h6 class="text-white m-b-0">Today Amount</h6>
                                </div>
                                <div class="col-4 text-right">
                                    <canvas id="update-chart-1" height="50"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-c-green update-card">
                        <div class="card-block">
                            <div class="row align-items-end">
                                <div class="col-8">
                                    <h4 class="text-white">${response['allincome']}</h4>
                                    <h6 class="text-white m-b-0">All Income</h6>
                                </div>
                                <div class="col-4 text-right">
                                    <canvas id="update-chart-2" height="50"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-c-pink update-card">
                        <div class="card-block">
                            <div class="row align-items-end">
                                <div class="col-8">
                                    <h4 class="text-white">${response['amount']}</h4>
                                    <h6 class="text-white m-b-0">Unpaid Amount</h6>
                                </div>
                                <div class="col-4 text-right">
                                    <canvas id="update-chart-3" height="50"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
                        </div>
                    </div>
                </div>
                <div class="col-xl-3 col-md-6">
                    <div class="card bg-c-lite-green update-card">
                        <div class="card-block">
                            <div class="row align-items-end">
                                <div class="col-8">
                                    <h4 class="text-white">${response['patteint']}</h4>
                                    <h6 class="text-white m-b-0">All Patteint</h6>
                                </div>
                                <div class="col-4 text-right">
                                    <canvas id="update-chart-4" height="50"></canvas>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer">
                            <p class="text-white m-b-0"><i class="feather icon-clock text-white f-14 m-r-10"></i>update : 2:15 am</p>
                        </div>
                    </div>
                </div>
                    `;
                   


                

             

                $("#dashboard").append(html);
                


                

               
            }else{
                alert(response)

            }


        },error:function(data){
            console.log(data.responseText);

        }

    })
}














