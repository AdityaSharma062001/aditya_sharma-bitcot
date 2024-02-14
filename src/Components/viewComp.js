export default function ViewComp({rec})
{
    return <div id="viewModel" class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Record Details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <b>Name : {rec?.name}</b><br></br>
          <b>Number: {rec?.mobile}</b><br></br>
          <b>Email : {rec?.email}</b><br></br>
          <b>Addres : {rec?.address}</b><br></br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
}