import { useState } from "react"
import Button from "../../atoms/Button"
import Card from "../../atoms/Card"
import Modal from "../../atoms/Modal"
import Textarea from "../../atoms/Textarea"
import "./GrottoCard.scss"
import GrottoSearch from "./GrottoSearch"
import Input from "../../atoms/Input"
import MapThumb from "../../atoms/MapThumb"
import data from "../../../game/data"
import { GrottoStateSelect } from "../../atoms/IconSelect"

export default props => {
  const [searchModalOpen, setSearchModalOpen] = useState(false)
  const [exportModalOpen, setExportModalOpen] = useState(false)

  return (
    <Card
      label={props.label}
      labelFn={props.labelFn}
      className={`grotto-card ${props.disabled ? "disabled" : ""}`}
    >
      <div className="name">
        {(props.label || props.labelFn) && <small>name:</small>}

        <GrottoStateSelect
          id={props.grotto.getState()}
          onChange={e => {
            props.updateGrotto(save => {
              props.grotto.setState(parseInt(e.target.value))
            })
          }}
        />
        <select
          className="kind"
          value={props.grotto.getKind()}
          onChange={e => {
            props.updateGrotto(save => {
              props.grotto.setKind(parseInt(e.target.value))
            })
          }}
        >
          {data.grottoKinds
            .filter(c => c.valid || c.id == props.grotto.getKind())
            .map((c, i) => (
              <option key={i} value={c.id}>
                {c.name}
              </option>
            ))}
        </select>
        {props.grotto.getKind() == data.GROTTO_KIND_NORMAL ? (
          <>
            <span>{props.grotto.getName()}</span>
            <Button
              onClick={e => {
                setSearchModalOpen(true)
              }}
            >
              search
            </Button>
            <Modal
              open={searchModalOpen}
              label="search grottos:"
              onClose={e => {
                setSearchModalOpen(false)
              }}
            >
              <GrottoSearch
                key={props.grotto.getMapIdString()}
                seed={props.grotto.getSeed()}
                rank={props.grotto.getRank()}
                onChange={e => {
                  props.onChange(e)
                  setSearchModalOpen(false)
                }}
              />
            </Modal>
          </>
        ) : props.grotto.getKind() == data.GROTTO_KIND_LEGACY ? (
          <>
            <select
              value={props.grotto.getLegacyBoss()}
              onChange={e => {
                props.updateGrotto(save => {
                  props.grotto.setLegacyBoss(e.target.value)
                })
              }}
            >
              {data.legacyBosses.map((b, i) => (
                <option key={i} value={b.id}>
                  {b.name}
                </option>
              ))}
            </select>
            <span>{" lv. "}</span>
            <Input
              type="number"
              value={props.grotto.getLegacyBossLevel()}
              onChange={e => {
                props.updateGrotto(save => {
                  props.grotto.setLegacyBossLevel(e.target.value)
                })
              }}
              min={1}
              max={99}
              size={3}
            />
          </>
        ) : (
          <></>
        )}
        <Button
          className="export-btn"
          onClick={e => {
            setExportModalOpen(true)
          }}
        >
          export
        </Button>
        <Modal
          open={exportModalOpen}
          label="copy grotto string:"
          onClose={e => {
            setExportModalOpen(false)
          }}
        >
          <Textarea value={props.grotto.exportString()} readOnly={true}></Textarea>
          <Button
            onClick={e => {
              setExportModalOpen(false)
            }}
          >
            Ok
          </Button>
        </Modal>
      </div>
      <div>
        <small>treasures plundered:</small>
        <label>
          <Input
            type="checkbox"
            checked={props.grotto.getTreasurePlundered(0)}
            onChange={e => {
              props.updateGrotto(save => {
                props.grotto.setTreasurePlundered(0, e.target.checked)
              })
            }}
          />
          common
        </label>
        <label>
          <Input
            type="checkbox"
            checked={props.grotto.getTreasurePlundered(1)}
            onChange={e => {
              props.updateGrotto(save => {
                props.grotto.setTreasurePlundered(1, e.target.checked)
              })
            }}
          />
          uncommon
        </label>
        <label>
          <Input
            type="checkbox"
            checked={props.grotto.getTreasurePlundered(2)}
            onChange={e => {
              props.updateGrotto(save => {
                props.grotto.setTreasurePlundered(2, e.target.checked)
              })
            }}
          />
          rare
        </label>
      </div>
      <div>
        <small>explorers:</small>
        <label>
          discovered by:{" "}
          <Input
            type="text"
            value={props.grotto.getDiscoveredBy()}
            onChange={e => {
              props.updateGrotto(save => {
                props.grotto.setDiscoveredBy(e.target.value)
              })
            }}
          />
        </label>
        <label>
          conquered by:{" "}
          <Input
            type="text"
            value={props.grotto.getConqueredBy()}
            onChange={e => {
              props.updateGrotto(save => {
                props.grotto.setConqueredBy(e.target.value)
              })
            }}
          />
        </label>
      </div>
      <div className="locations">
        <small>location:</small>
        <div className="current">
          <label>
            current:{" "}
            <Input
              type="number"
              value={props.grotto.getLocation()}
              min={1}
              max={150}
              size={4}
              onChange={e => {
                props.updateGrotto(save => {
                  props.grotto.setLocation(e.target.value)
                })
              }}
            />
          </label>

          <MapThumb map={props.grotto.getLocation()} />
          <small>
            {!props.grotto.getValidLocations().includes(props.grotto.getLocation()) &&
              "invalid location"}
          </small>
        </div>

        <div className="valid">
          <span>valid locations:</span>
          <div className="maps">
            {props.grotto.getValidLocations().length ? (
              props.grotto.getValidLocations().map(loc => {
                return (
                  <div
                    key={loc}
                    onClick={e =>
                      props.updateGrotto(save => {
                        props.grotto.setLocation(loc)
                      })
                    }
                  >
                    <MapThumb map={loc} />
                    <small>
                      {loc} (0x{loc.toString(16).padStart(2, "0")})
                    </small>
                  </div>
                )
              })
            ) : (
              <small>no valid locations (map is not generable)</small>
            )}
          </div>
        </div>
      </div>

      <div>
        {props.grotto.getKind() == data.GROTTO_KIND_NORMAL ? (
          <>
            <small>identifier:</small>
            <label>
              seed:{" "}
              <Input
                type="number"
                value={props.grotto.getSeed()}
                min={0}
                max={65535}
                size={8}
                onChange={e => {
                  props.updateGrotto(save => {
                    props.grotto.setSeed(e.target.value)
                    props.grotto.setLocation(props.grotto.getValidLocations()[0] || 5)
                  })
                }}
              />
            </label>
            <label>
              rank:{" "}
              <Input
                type="number"
                value={props.grotto.getRank()}
                min={2}
                max={248}
                size={4}
                onChange={e => {
                  props.updateGrotto(save => {
                    props.grotto.setRank(e.target.value)
                    props.grotto.setLocation(props.grotto.getValidLocations()[0] || 5)
                  })
                }}
              />
            </label>
            <a
              target="_blank"
              href={`https://yabd.org/apps/dq9/grottodetails.php?map=${props.grotto.getMapIdString()}`}
            >
              yab's tools
            </a>
          </>
        ) : props.grotto.getKind() == data.GROTTO_KIND_LEGACY ? (
          <>
            <small>turns:</small>
            <Input
              type="number"
              value={props.grotto.getLegacyBossTurns()}
              min={0}
              max={65535}
              size={7}
              onChange={e => {
                props.updateGrotto(save => {
                  props.grotto.setLegacyBossTurns(e.target.value)
                })
              }}
            />
            <small> (values over 999 don't show in game)</small>
          </>
        ) : (
          <>
            <p></p>
          </>
        )}
      </div>
    </Card>
  )
}
