import Wrapper from './Wrapper'
import useMyStore from '../newsStore'

const Categories = ({ className }) => {
    const categories = ["Business", "Entertainment", "General", "Health", "Science", "Sports", "Technology"]
    
    const setCategory = useMyStore(state=>state.setCategory);
    const cate = useMyStore(state=>state.category);

    return (
        <div className={`${className}`}>
            <Wrapper>
                <div className='flex justify-center overflow-x-auto mt-8 gap-6 scroll-none'>
                    {categories.map((category) => (
                        <button
                            key={category}
                            name={category}
                            className= {`btn  text-xl
                                          ${category === cate 
                                            ?
                                            'bg-transparent  border-2 border-blue-500  text-blue-400  ring-2 ring-blue-500/40'
                                            :
                                            'btn-primary hover:bg-transparent'
                                          }
                                       `}
                            onClick={(e)=>(setCategory(e.target.name))}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </Wrapper>
        </div>
    )
}

export default Categories
