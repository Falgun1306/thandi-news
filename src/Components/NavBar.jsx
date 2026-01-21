import React from 'react'
import Wrapper from './Wrapper'
import useMyStore from '../newsStore'

const NavBar = ({ className }) => {

    const setSearch = useMyStore(status => status.setCategory);
    let timer = null;

    const handleSearch = (e) => {
        const search = e.target.value;
        if (!search) {
            setSearch('india')
        }

        clearTimeout(timer);

        timer = setTimeout(() => {
            setSearch(search);
        }, 1000);
    }
    return (
        <div className={`bg-base-200 ${className}`}>
            <Wrapper>
                <div className="navbar  shadow-sm">
                    <div className="flex-1">
                        <a className="btn btn-ghost text-xl">Thandi news</a>
                    </div>
                    <div className="flex gap-2">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" onChange={handleSearch} />
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default NavBar
