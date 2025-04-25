import React from "react";

const List = ({people, setStudent})=>{

    const handleRemove = (id) => {
        const newPeople = people.filter((person) => person.id !== id);
        setStudent(newPeople);
    }
    return(
        <>
            {people.map((person)=>{
                const {id,name,age, img}=person;
                    return (
                        <>
                            <div key={id} className="students">
                                <img className="img" src={img} alt={name}/>
                                <div className="info">
                                    <h4>{name}</h4>
                                    <p>{age} years</p>
                                </div>
                                <div>
                                    <button className="remove" onClick={()=>handleRemove(id)}>remove</button>
                                </div>
                            </div>
                        </>
                    )
                }
            )}
        </>
    )
}

export default List;