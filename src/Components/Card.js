import {StyledCard} from './styles/Card.styled'


export default function Card({item}) {
    const {id,title,body,image} = item;
    // {item:{id,title,body,image}}
  return (

    <StyledCard layout={id % 2 === 0 && 'row-reverse'} >
        <div>
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
        <div>
           <img src={`./images/${image}`}/>
        </div>
    </StyledCard>
  )
}
