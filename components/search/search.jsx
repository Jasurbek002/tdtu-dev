import React from 'react';

const Search = ({state}) => {
    return (
        <div style={{width: state ? 'flex' : 'none'}} className='w-11/12 p-2 bg-white rounded-lg shadow-4xl  flex-col items-center absolute z-50' >
            <div className='flex w-11/12'>
                  <input style={{width:'80%',height:"35px"}}
                   className='rounded-md'
                    type="text" />
                  <button>Search</button>
            </div>
            <hr />
        </div>
    );
}

export default Search;
