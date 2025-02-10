


function BoasVindas({nome, mensagem,}) {


  return (
    <div>
        <div className="boasvindas-container">
            <h3>Olá { nome }</h3>
             <h4>{ mensagem }</h4>
             {/* <button onClick={ () => console.log( props ) }>log</button> */}
        </div>
    </div>
  )
}

export default BoasVindas
