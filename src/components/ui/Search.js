import { useState } from 'react'

const Search = ({getQuery}) => {
    const [text, setText] = useState('');
    const onChange = (q) =>{
        setText(q);
        // getQuery(q);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(" fire !",text)
        getQuery(text);
    }

    return (
        <section className='search'>
            <form onSubmit={onSubmit}>
                <input type='text' className='form-control' placeholder='Search characters'
                   value={text} autoFocus onChange={(e) => onChange(e.target.value)} />
                <button type="submit" className='form-control btn'>Search</button>
            </form>
        </section>
    )
}

export default Search