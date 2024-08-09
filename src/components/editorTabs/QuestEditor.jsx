import { useContext, useState } from "react"

import { SaveManagerContext } from "../../SaveManagerContext"
import Card from "../atoms/Card"
import Input from "../atoms/Input"

import gameData from "../../game/data"
import "./QuestEditor.scss"
import { QuestStatusIcon } from "../atoms/Icon"

const TimeInput = props => {
  const year = 2000 + (props.value & 0x7f)
  const month = (props.value & 0x780) >> 7
  const day = (props.value & 0xf800) >> 11
  const hour = (props.value & 0x1f0000) >> 16
  const minute = (props.value & 0x7e00000) >> 21

  const constructTime = (yr, mon, day, hr, min) => {
    return (
      ((yr - 2000) & 0x7f) |
      ((mon << 7) & 0x780) |
      ((day << 11) & 0xf800) |
      ((hr << 16) & 0x1f0000) |
      ((min << 21) & 0x7e00000)
    )
  }

  return (
    <div>
      <Input
        type="number"
        value={day}
        min={1}
        max={31}
        size={3}
        onChange={e =>
          props.onChange && props.onChange(constructTime(year, month, e.target.value, hour, minute))
        }
      />
      /
      <Input
        type="number"
        value={month}
        min={1}
        max={12}
        size={3}
        onChange={e =>
          props.onChange && props.onChange(constructTime(year, e.target.value, day, hour, minute))
        }
      />
      /
      <Input
        type="number"
        value={year}
        min={2000}
        max={2128}
        size="6"
        onChange={e =>
          props.onChange && props.onChange(constructTime(e.target.value, month, day, hour, minute))
        }
      />{" "}
      <Input
        type="number"
        value={hour}
        min={0}
        max={23}
        size="3"
        onChange={e =>
          props.onChange && props.onChange(constructTime(year, month, day, e.target.value, minute))
        }
      />
      :
      <Input
        type="number"
        value={minute}
        min={0}
        max={60}
        size="3"
        onChange={e =>
          props.onChange && props.onChange(constructTime(year, month, day, hour, e.target.value))
        }
      />
    </div>
  )
}

export default props => {
  let { save, updateSave } = useContext(SaveManagerContext)

  let [filter, setFilter] = useState("")

  return (
    <div className="quest-root">
      <Card label="info:" className="sidebar">
        <Input
          type="text"
          placeholder="filter"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <p>
          <small>
            quests in progress status' cannot be change as doing so runs the risk of creating an
            invalid state.
          </small>
        </p>
      </Card>
      <Card label="quests:" className="quests">
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>name</th>
                <th>unlocked</th>
                <th>status</th>
                <th>date (d/m/y h:m)</th>
              </tr>
            </thead>
            <tbody>
              {gameData.orderedQuests
                .filter(q => q.name.toLowerCase().includes(filter.toLowerCase()))
                .map(q => (
                  <tr key={q.id}>
                    <td>{q.number}</td>
                    <td>{q.name}</td>
                    <td>
                      <Input
                        type="checkbox"
                        disabled={!q.dlc}
                        checked={!q.dlc || save.getDlcQuestUnlocked(q.id)}
                        onChange={e => {
                          updateSave(save => {
                            save.setDlcQuestUnlocked(q.id, e.target.checked)
                          })
                        }}
                      />
                    </td>
                    <td>
                      {/* <QuestStatusIcon icon={save.getQuestStatus(q.id)} /> */}
                      <select
                        value={save.getQuestStatus(q.id)}
                        onChange={e => {
                          updateSave(save => {
                            save.setQuestStatus(q.id, e.target.value)
                          })
                        }}
                        disabled={save.getQuestStatus(q.id) == gameData.QUEST_STATUS_IN_PROGRESS}
                      >
                        {Object.entries(gameData.questStatusNames).map(([status, name]) => (
                          <option
                            key={status}
                            value={status}
                            disabled={status == gameData.QUEST_STATUS_IN_PROGRESS}
                          >
                            {name}
                          </option>
                        ))}
                      </select>
                      {/* ({save.getQuestStatus(q.id)}) */}
                    </td>
                    <td>
                      <TimeInput
                        value={save.getQuestTime(q.id)}
                        onChange={time => {
                          updateSave(save => {
                            save.setQuestTime(q.id, time)
                          })
                        }}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}