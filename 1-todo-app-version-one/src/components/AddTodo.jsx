
const AddTodo = () => {
    return (
        <div class="container text-center">
            <div class="row kg-row">
                <div class="col-6">
                    <input type='text' placeholder="Enter Todo List" />
                </div>
                <div class="col-4">
                    <input type='date' />
                </div>
                <div class="col-2">
                    <button class='kg-button btn btn-success'>Add</button>
                </div>
            </div>
        </div>

    )
}
export default AddTodo;