const SearchField = () => {
    return (
        <div className='container bg-primary-subtle p-5 mt-5 rounded-4'>
            <form action="#" className="row">
                <div className='col-md-12'>
                    <input type='text' className='form-control py-3 my-2 rounded-3' placeholder='Nhập điểm du lịch hoặc tên khách sạn' />
                </div>
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className="form-control py-3 my-2 rounded-3" id="input_from" placeholder="Start Date" data-rome-id="0" />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input type="text" className="form-control py-3 my-2 rounded-3" id="input_to" placeholder="Start Date" data-rome-id="1" />
                    </div>
                </div>
                <button type='submit' className='btn btn-primary w-50 py-3 my-2 mx-auto'>Tìm</button>
            </form>
        </div>
    )
}

export default SearchField;