var characters = {
  team1: ['Batman', 'Superman', 'Spiderman'],
  team2: ['Joker', 'Lex Luthor', 'Venom']
}

export default () => (
  <div>
    <b>{whichTeam(characters.team1)}</b>
    <ul>
      {characters.team1.map(character => <li>{character}</li>)}
    </ul>
    <b>{whichTeam(characters.team2)}</b>
    <ul>
      {characters.team2.map(character => <li>{character}</li>)}
    </ul>
  </div>
)

function whichTeam (team) {
  return team.includes('Batman') ? 'Good Guys' : 'Bad Guys'
}
