
const AddTodo = () => {
    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input type='text' placeholder="Enter Todo List" />
                </div>
                <div className="col-4">
                    <input type='date' />
                </div>
                <div className="col-2">
                    <button className='kg-button btn btn-success'>Add</button>
                </div>
            </div>
        </div>

    )
}
export default AddTodo;