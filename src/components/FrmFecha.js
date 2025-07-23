import React, { useEffect } from 'react'
import { getFormatedDateTime_short } from '../utils/utils'

export default function Formulario(props) {
  useEffect(() => {
    console.log('*** useEffect() - FrmFecha')
  }, [])

  return (
    <div className='center'>
      <table id="my_table">
        <thead>
          <tr>
            <th colSpan={6}>{props.division} - {props.fecha}</th>
          </tr>
          <tr>
            <th>Cancha</th>
            <th>Fecha</th>
            <th>Equipo 1</th>
            <th>Equipo 2</th>
            <th>Resultado</th>
          </tr>

        </thead>
        <tbody>
          {props.matches.length > 0 &&
            <>
              {props.matches.map((match, index) => {
                const date = match.date && getFormatedDateTime_short(new Date(match.date))
                const time = date?.slice(-5)
                return (
                  <tr key={match._id}>
                    <td>{
                      props.division.includes("Femenino") && index > 0
                        ? '"'
                        : match.id_stadium?.name}
                    </td>
                    <td>{
                      props.division.includes("Femenino") && index > 0
                        ? time
                        : date}
                    </td>
                    <td className={
                      match.local_team_final_score === 0 && match.visiting_team_final_score === 0
                        ? ""
                        : match.local_team_final_score > match.visiting_team_final_score
                          ? "bgGreen"
                          : match.local_team_final_score === match.visiting_team_final_score
                            ? "bgLightGreen"
                            : match.local_team_final_score === -1
                              ? "bgRed"
                              : undefined}>
                      {match.id_local_team.name}
                    </td>

                    <td className={
                      match.local_team_final_score === 0 && match.visiting_team_final_score === 0
                        ? ""
                        : match.local_team_final_score < match.visiting_team_final_score
                          ? "bgGreen"
                          : match.local_team_final_score === match.visiting_team_final_score
                            ? "bgLightGreen"
                            : match.visiting_team_final_score === -1
                              ? "bgRed"
                              : undefined}>
                      {match.id_visiting_team.name}
                    </td>

                    <td>
                      {
                        match.local_team_final_score === 0 && match.visiting_team_final_score === 0
                          ? ""
                          : match.id_local_team.name === "LIBRE"
                            ? ""
                            : match.local_team_final_score === -1 || match.visiting_team_final_score === -1
                              ? (<>(w.o.)</>)
                              : (<>{match.local_team_final_score} - {match.visiting_team_final_score}</>)
                      }
                    </td>
                  </tr>
                )
              })}
            </>
          }
        </tbody>
      </table>
    </div >
  )
}