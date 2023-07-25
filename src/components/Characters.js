export default function Characters(props) {
    const { characters, setCharacters } = props;

    const resetCharacters = () => {
        setCharacters(null);
    }
  return (

    <div className="characters">
        <span className="back-home" onClick={resetCharacters}>Back to HOME</span>
        <h1>Personajes</h1>
        <div className="container-characters">
            {characters.map((character, index) => (
                <div className="character-container" key={index}>
                    <div>
                        <img src={character.image} alt={character.name} />
                    </div>
                    <div>
                        <h3>{character.name}</h3>
                        <h6>
                            {character.status === "Alive" ? (
                                <>
                                <span className="alive"/>
                                Alive
                                </>
                            ) : (
                                <>
                                <span className="dead"/>
                                Dead
                                </>
                            )}
                        </h6>
                        <div className="info">
                        <p className="text-grey"><span>Episodios:</span></p>
                        <span className="specifics">{character.episode.length}</span>
                        </div>
                        <div className="info">
                        <p><span className="text-grey">Especie:</span></p>
                        <span className="specifics">{character.species}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <span className="back-home" onClick={resetCharacters}>Back to HOME</span>
    </div>
  )
}
