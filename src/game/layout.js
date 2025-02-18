import gameData from "./data"

/// max length of character (guests and party) names in bytes
export const NAME_LENGTH = 10

/// total size of one save slot in bytes
export const SAVE_SIZE = 32768

export const CHECKSUM_A_OFFSET = 16
export const CHECKSUM_A_DATA_OFFSET = 20
export const CHECKSUM_A_DATA_END = 36

export const CHECKSUM_C_OFFSET = 36
export const CHECKSUM_C_DATA_OFFSET = 40
export const CHECKSUM_C_DATA_END = 132

export const CHECKSUM_B_OFFSET = 132
export const CHECKSUM_B_DATA_OFFSET = 136
export const CHECKSUM_B_DATA_END = 28644

/// byte for if the save slot is a quick save
export const IS_QUICK_SAVE_OFFSET = 20

/// first bit is 1 if the save exists
export const SAVE_EXISTS_OFFSET = 21

export const SAVE_AREA = 11476

export const QUICK_SAVE_AREA = 27104

/// coordinates of the player quick save location as an ivec3
export const QUICK_SAVE_COORDINATES = 27108

/// maximum number of characters in save
export const NUM_CHARACTERS = 13

/// maximum number of characters in inn
export const MAX_CHARACTERS_IN_INN = 8

/// offset of character array
export const CHARACTER_OFFSET = 136

/// total size of a character's data in bytes
export const CHARACTER_SIZE = 572

/// offset of character level array relative to the beginning of character data
export const CHARACTER_VOCATION_LEVEL_OFFSET = 2
export const CHARACTER_VOCATION_REVOCATION_OFFSET = 15
export const CHARACTER_VOCATION_EXP_OFFSET = 28

/// offset of current vocation index relative to beginning of character data
export const CURRENT_VOCATION_OFFSET = 80

/// offset of character stat bonuses, each seed is 10 bits
/// they're stored as 3 u32s with the final 2 bits of each being unused
export const CHARACTER_VOCATION_SEEDS_OFFSET = 88

/// offset of character's unallocated skill points, relative to beginning of character data
export const CHARACTER_UNALLOCATED_SKILL_POINTS_OFFSET = 244

/// offset of character's skill allocation array, relative to beginning of character data
export const CHARACTER_SKILL_ALLOCATIONS_OFFSET = 247

/// offset of character's proficiency bitflags, relative to beginning of character data
export const CHARACTER_PROFICIENCY_OFFSET = 282

export const CHARACTER_PROFICIENCY_LENGTH = 36

// NOTE: zoom and egg on are just special indices into the character proficiencies bitmap
export const CHARACTER_ZOOM_OFFSET = 280
export const CHARACTER_EGG_ON_OFFSET = 317

/// offset of name relative to beginning of character data
export const CHARACTER_NAME_OFFSET = 320

/// offset of name equipments relative to beginning of character data
export const CHARACTER_EQUIPMENT_OFFSET = 352

export const CHARACTER_FACE_OFFSET = 356
export const CHARACTER_HAIRSTYLE_OFFSET = 358
/// offset of character gender/colors byte relative to beginning of character data
// u8 laid out like: `eeeesssg`
// where e is eye color, s is skin color, and g is gender
export const CHARACTER_GENDER_COLORS_OFFSET = 372

export const CHARACTER_COLOR_OFFSET = 1

/// offset of character hairstyle byte relative to beginning of character data
// u8 laid out like: `xxxxcccc`
// where x is unknown data, and c is the color index
export const CHARACTER_HAIR_COLOR_OFFSET = 373

export const CHARACTER_BODY_TYPE_W = 376
export const CHARACTER_BODY_TYPE_H = 378

/// offset of character's held items, relative to the beginning of the save
export const HELD_ITEM_OFFSET = 7578

/// order of party members
export const PARTY_ORDER_OFFSET = 7573

/// number of characters in standby
export const STANDBY_COUNT_OFFSET = 7572

/// number of characters in party
export const PARTY_COUNT_OFFSET = 7577

/// items are stored in 2 contiguous arrays, one of the ids which are u16s and one of the counts which are u8s
// prettier-ignore
export const itemOffsets = {
  [gameData.ITEM_TYPE_COMMON]:    { idOffset: 7664,  countOffset: 7968,  isWardrobe: false },
  [gameData.ITEM_TYPE_IMPORTANT]: { idOffset: 11164, countOffset: 11352, isWardrobe: false },
  [gameData.ITEM_TYPE_WEAPON]:    { idOffset: 8120,  countOffset: 10136, isWardrobe: true },
  [gameData.ITEM_TYPE_SHIELD]:    { idOffset: 8664,  countOffset: 10408, isWardrobe: true },
  [gameData.ITEM_TYPE_TORSO]:     { idOffset: 8760,  countOffset: 10456, isWardrobe: true },
  [gameData.ITEM_TYPE_HEAD]:      { idOffset: 9336,  countOffset: 10744, isWardrobe: true },
  [gameData.ITEM_TYPE_ARM]:       { idOffset: 9624,  countOffset: 10888, isWardrobe: true },
  [gameData.ITEM_TYPE_FEET]:      { idOffset: 9784,  countOffset: 10968, isWardrobe: true },
  [gameData.ITEM_TYPE_LEGS]:      { idOffset: 9144,  countOffset: 10648, isWardrobe: true },
  [gameData.ITEM_TYPE_ACCESSORY]: { idOffset: 10008, countOffset: 11080, isWardrobe: true },
}

export const GOLD_ON_HAND_OFFSET = 11448
export const GOLD_IN_BANK_OFFSET = 11452

export const MINI_MEDAL_OFFSET = 11460

export const PARTY_TRICK_LEARNED_OFFSET = 12108

export const PLAYTIME_HOURS = 16024
export const PLAYTIME_MINUTES = 16026
export const PLAYTIME_SECONDS = 16027

export const MULTIPLAYER_HOURS = 16028
export const MULTIPLAYER_MINUTES = 16030
export const MULTIPLAYER_SECONDS = 16031

export const UNLOCKABLE_VOCATION_OFFSET = 12276

export const VISITED_LOCATIONS_OFFSET = 11788

export const CURRENT_GUESTS_CANVASED_OFFSET = 23160
export const TOTAL_GUESTS_CANVASED_OFFSET = 23164

/// offset of canvased guest array
export const CANVASED_GUEST_OFFSET = 16200

/// size of canvased guest structure
export const CANVASED_GUEST_SIZE = 232

/// maximum number of canvased guests in
export const CANVASED_GUEST_NUM = 30

/// offset of name relative to beginning of guest data
export const GUEST_NAME_OFFSET = 0

export const GUEST_HOLDING_GROTTO_CHECK_IN_YEAR_OFFSET = 11

/// offset of vocation and location in inn relative to beginning of guest data
export const GUEST_VOCATION_AND_LOCATION_OFFSET = 12
export const GUEST_LEVEL_CHECK_IN_DAY_MONTH_OFFSET = 13

// NOTE: broadly unexplored...
export const GUEST_RENDER_STYLE_OFFSET = 15

/// offset of the index of the guest (0 if invalid), pretty sure this is the order of guests canvased
export const GUEST_INDEX_OFFSET = 16

/// guest id
export const GUEST_ID_OFFSET = 20

export const GUEST_EQUIPMENT_OFFSET = 26

export const GUEST_FACE_OFFSET = 30

export const GUEST_HAIRSTYLE_OFFSET = 32

export const GUEST_GENDER_COLORS_OFFSET = 46

export const GUEST_HAIR_COLOR_OFFSET = 47

export const GUEST_BODY_TYPE_W = 50
export const GUEST_BODY_TYPE_H = 52

export const GUEST_PLAYTIME_HOURS = 56
export const GUEST_ALCHEMY_COUNT = 57
export const GUEST_MULTIPLAYER_HOURS = 60
export const GUEST_VICTORY_COUNT_OFFSET = 61
export const GUEST_PLAYTIME_MINUTES = 64
export const GUEST_MONSTER_COUNT_OFFSET = 65
export const GUEST_ITEM_COUNT_OFFSET = 66
export const GUEST_ACCOLADE_COUNT_OFFSET = 68
export const GUEST_GROTTO_COUNT_OFFSET = 69
export const GUEST_WARDROBE_COUNT_OFFSET = 71
export const GUEST_QUEST_GUEST_ALCHEMY_OFFSET = 72

/// title as shown on the top of the screen
export const GUEST_TITLE_TOP_OFFSET = 76

export const GUEST_REVOCATION_OFFSET = 78

export const GUEST_COLOR_OFFSET = 79
export const GUEST_HELD_GROTTO_OFFSET = 80

export const GUEST_BIRTHDAY_OFFSET = 108

export const GUEST_SPEECH_STYLE_OFFSET = 110

export const GUEST_SECRET_AGE_OFFSET = 111

/// title as shown when talking and origin
export const GUEST_TITLE_ORIGIN_OFFSET = 113

export const GUEST_MESSAGE_OFFSET = 116

export const GUEST_MESSAGE_LENGTH = 57

/// offset of the inn level (only 0x7)
export const INN_LEVEL_OFFSET = 23172

export const PLAYER_ID_OFFSET = 11520

/// offset of special guest bitflags
export const SPECIAL_GUEST_OFFSET = 11528

export const DQVC_ITEMS_OFFSET = 27844
export const DQVC_ITEMS_ITEM_OFFSET = 0
export const DQVC_ITEMS_PRICE_STOCK_OFFSET = 4

export const DQVC_ITEM_SIZE = 40

export const DQVC_MESSAGE_OFFSET = 23176
export const DQVC_MESSAGE_LENGTH = 510

export const DQVC_MESSAGE_EXPIRY_TIME_OFFSET = 28096
export const DQVC_ITEMS_EXPIRY_TIME_OFFSET = 28084

/// offset of count of quests cleared
export const QUEST_CLEAR_COUNT_OFFSET = 16035

export const HELD_GROTTO_COUNT_OFFSET = 24204

export const HELD_GROTTO_COUNT_MAX = 99

/// offset of grotto array
export const GROTTO_DATA_OFFSET = 24206

export const GROTTO_KIND_STATE_OFFSET = 0
export const GROTTO_DISCOVERED_BY_OFFSET = 1
export const GROTTO_CONQUERED_BY_OFFSET = 11
export const GROTTO_LOCATION_OFFSET = 21
export const GROTTO_TREASURE_PLUNDERED_OFFSET = 22
export const GROTTO_RANK_LEGACY_BOSS_OFFSET = 23
export const GROTTO_LEGACY_BOSS_LEVEL_OFFSET = 24
export const GROTTO_SEED_TURNS_OFFSET = 26

/// size of each grotto's data
export const GROTTO_DATA_SIZE = 28

export const ITEM_FOUND_OFFSET = 12240
export const WARDROBE_FOUND_OFFSET = 12122

/// offset of quest status array, each element is 4 bits of data
export const QUEST_STATUS_OFFSET = 12300
export const QUEST_CLEARED_OFFSET = 12536
export const QUEST_TIMES_OFFSET = 12564

/// each monster data is a u32 with the format
/// ddddddddddecccccccrrrrrrr-------
/// where:
/// d: the number of times the monster has been defeated
/// e: if eye for trouble has been used
/// c: the number of times the common drop has been stolen/dropped
/// r: the number of times the rare drop has been stolen/dropped
/// -: seems to always be 0
export const DEFEATED_MONSTER_DATA_OFFSET = 13784

export const ALCHEMY_PERFORMED_OFFSET = 15016 // int?
export const ALCHENOMICON_DATA_OFFSET = 15020

export const ACCOLADE_UNLOCK_DATA_OFFSET = 15964

export const BATTLE_VICTORIES_OFFSET = 16032

export const GROTTOS_CLEARED_OFFSET = 16037

export const ACCOLADE_COUNT_OFFSET = 16040
export const GUESTS_CANVASED_OFFSET = 16041
export const ALCHENOMICON_COUNT_OFFSET = 16042
export const DEFEATED_MONSTER_COUNT_OFFSET = 16044
export const ITEMS_COLLECTED_COUNT_OFFSET = 16045
export const WARDROBE_COLLECTED_COUNT_OFFSET = 16046

export const BATTLE_FLEE_OFFSET = 16076 // idk not public TODO: add this
export const BATTLE_FLEE_SUCCESS_OFFSET = 16080
export const BATTLES_OFFSET = 16084
export const BATTLE_LOSSES_OFFSET = 16088

export const PROFILE_BIRTHDAY_OFFSET = 26980
export const PROFILE_SPEECH_STYLE_OFFSET = 26982
export const PROFILE_SECRET_AGE_OFFSET = 26983
export const PROFILE_TITLE_ORIGIN_OFFSET = 26985

export const PROFILE_MESSAGE_LENGTH = 57
export const PROFILE_MESSAGE_OFFSET = 26988

export const annotations = []

for (let i = 0; i < 2; i++) {
  let slotOffset = i * SAVE_SIZE
  annotations.push({
    name: `save slot ${i}`,
    begin: slotOffset,
    length: SAVE_SIZE,
    color: "var(--grey)",
  })

  // party
  {
    for (let i = 0; i < NUM_CHARACTERS; i++) {
      const characterOffset = slotOffset + CHARACTER_OFFSET + CHARACTER_SIZE * i

      annotations.push({
        name: `character ${i}`,
        begin: characterOffset,
        length: CHARACTER_SIZE,
        color: "var(--lavender)",
      })

      annotations.push({
        name: `color`,
        begin: characterOffset + CHARACTER_COLOR_OFFSET,
        length: 1,
        color: "var(--yellow)",
      })

      annotations.push({
        name: `name`,
        begin: characterOffset + CHARACTER_NAME_OFFSET,
        length: NAME_LENGTH,
        color: "var(--red)",
      })

      annotations.push({
        name: `gender/colors`,
        begin: characterOffset + CHARACTER_GENDER_COLORS_OFFSET,
        length: 1,
        color: "var(--peach)",
      })

      annotations.push({
        name: `face type`,
        begin: characterOffset + CHARACTER_FACE_OFFSET,
        length: 1,
        color: "var(--yellow)",
      })

      annotations.push({
        name: `hair colour`,
        begin: characterOffset + CHARACTER_HAIR_COLOR_OFFSET,
        length: 1,
        color: "var(--green)",
      })

      annotations.push({
        name: `hair style`,
        begin: characterOffset + CHARACTER_HAIRSTYLE_OFFSET,
        length: 1,
        color: "var(--green)",
      })

      annotations.push({
        name: `body type W`,
        begin: characterOffset + CHARACTER_BODY_TYPE_W,
        length: 2,
        color: "var(--teal)",
      })

      annotations.push({
        name: `body type H`,
        begin: characterOffset + CHARACTER_BODY_TYPE_H,
        length: 2,
        color: "var(--teal)",
      })

      annotations.push({
        name: `current vocation`,
        begin: characterOffset + CURRENT_VOCATION_OFFSET,
        length: 1,
        color: "var(--blue)",
      })

      for (const itemType of gameData.equipmentTypes) {
        const equipmentOffset = characterOffset + CHARACTER_EQUIPMENT_OFFSET + (itemType - 1) * 2

        annotations.push({
          name: `equipped ${gameData.itemTypeNames[itemType]}`,
          begin: equipmentOffset,
          length: 2,
          color: "var(--maroon)",
        })
      }

      for (const skill of gameData.skills) {
        const skillOffset = characterOffset + CHARACTER_SKILL_ALLOCATIONS_OFFSET + skill.id
        annotations.push({
          name: `${skill.name} point allocation`,
          begin: skillOffset,
          length: 1,
          color: "var(--sky)",
        })
      }

      for (const v of gameData.vocations) {
        annotations.push({
          name: `${v.name} exp`,
          begin: characterOffset + CHARACTER_VOCATION_EXP_OFFSET + v.id * 4,
          length: 4,
          color: "var(--green)",
        })

        annotations.push({
          name: `${v.name} level`,
          begin: characterOffset + CHARACTER_VOCATION_LEVEL_OFFSET + v.id,
          length: 1,
          color: "var(--teal)",
        })

        annotations.push({
          name: `${v.name} revocations`,
          begin: characterOffset + CHARACTER_VOCATION_REVOCATION_OFFSET + v.id,
          length: 1,
          color: "var(--blue)",
        })

        annotations.push({
          name: `${v.name} seeds`,
          begin: characterOffset + CHARACTER_VOCATION_SEEDS_OFFSET + 12 * v.id,
          length: 12,
          color: "var(--peach)",
        })
      }

      annotations.push({
        name: `proficiencies bitmap`,
        begin: characterOffset + CHARACTER_PROFICIENCY_OFFSET,
        length: CHARACTER_PROFICIENCY_LENGTH,
        color: "var(--sapphire)",
      })
    }

    for (let i = 0; i < 4; i++) {
      const heldItemOffset = slotOffset + HELD_ITEM_OFFSET + 18 * i
      annotations.push({
        name: `character ${i} held items`,
        begin: heldItemOffset,
        length: 16,
        color: "var(--rosewater)",
      })

      for (let i = 0; i < 8; i++) {
        const itemOffset = heldItemOffset + 2 * i

        annotations.push({
          name: `item ${i}`,
          begin: itemOffset,
          length: 2,
          color: "var(--mauve)",
        })
      }
    }
  }

  // grottos
  {
    for (let i = 0; i < HELD_GROTTO_COUNT_MAX; i++) {
      const grottoOffset = slotOffset + GROTTO_DATA_OFFSET + GROTTO_DATA_SIZE * i

      annotations.push({
        name: `grotto ${i}`,
        begin: grottoOffset,
        length: GROTTO_DATA_SIZE,
        color: "var(--lavender)",
      })

      annotations.push({
        name: `kind/state`,
        begin: grottoOffset + GROTTO_KIND_STATE_OFFSET,
        length: 1,
        color: "var(--peach)",
      })

      annotations.push({
        name: `conquerer name`,
        begin: grottoOffset + GROTTO_CONQUERED_BY_OFFSET,
        length: NAME_LENGTH,
        color: "var(--mauve)",
      })

      annotations.push({
        name: `discoverer name`,
        begin: grottoOffset + GROTTO_DISCOVERED_BY_OFFSET,
        length: NAME_LENGTH,
        color: "var(--blue)",
      })

      annotations.push({
        name: `location`,
        begin: grottoOffset + GROTTO_LOCATION_OFFSET,
        length: 1,
        color: "var(--green)",
      })
      annotations.push({
        name: `treasure plundered`,
        begin: grottoOffset + GROTTO_TREASURE_PLUNDERED_OFFSET,
        length: 1,
        color: "var(--green)",
      })
      annotations.push({
        name: `rank/legacy boss`,
        begin: grottoOffset + GROTTO_RANK_LEGACY_BOSS_OFFSET,
        length: 1,
        color: "var(--teal)",
      })

      annotations.push({
        name: `legacy boss level`,
        begin: grottoOffset + GROTTO_LEGACY_BOSS_LEVEL_OFFSET,
        length: 1,
        color: "var(--sapphire)",
      })

      annotations.push({
        name: `seed/turns`,
        begin: grottoOffset + GROTTO_SEED_TURNS_OFFSET,
        length: 2,
        color: "var(--sapphire)",
      })
    }
  }

  // inn
  {
    for (let i = 0; i < NUM_CHARACTERS; i++) {
      const guestOffset = slotOffset + CANVASED_GUEST_OFFSET + CANVASED_GUEST_SIZE * i

      annotations.push({
        name: `canvased guest ${i}`,
        begin: guestOffset,
        length: CANVASED_GUEST_SIZE,
        color: "var(--lavender)",
      })

      annotations.push({
        name: `name`,
        begin: guestOffset + GUEST_NAME_OFFSET,
        length: NAME_LENGTH,
        color: "var(--red)",
      })

      annotations.push({
        name: `holding grotto + check-in year`,
        begin: guestOffset + GUEST_HOLDING_GROTTO_CHECK_IN_YEAR_OFFSET,
        length: 1,
        color: "var(--red)",
      })

      annotations.push({
        name: "vocation/location",
        begin: guestOffset + GUEST_VOCATION_AND_LOCATION_OFFSET,
        length: 1,
        color: "var(--blue)",
      })

      annotations.push({
        name: "level/check-in day+month",
        begin: guestOffset + GUEST_LEVEL_CHECK_IN_DAY_MONTH_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "index",
        begin: guestOffset + GUEST_INDEX_OFFSET,
        length: 4,
        color: "var(--rosewater)",
      })

      annotations.push({
        name: `guest ID`,
        begin: guestOffset + GUEST_ID_OFFSET,
        length: 6,
        color: "var(--red)",
      })

      for (const itemType of gameData.equipmentTypes) {
        const equipmentOffset = guestOffset + GUEST_EQUIPMENT_OFFSET + (itemType - 1) * 2

        annotations.push({
          name: `equipped ${gameData.itemTypeNames[itemType]}`,
          begin: equipmentOffset,
          length: 2,
          color: "var(--maroon)",
        })
      }

      annotations.push({
        name: "face",
        begin: guestOffset + GUEST_FACE_OFFSET,
        length: 1,
        color: "var(--green)",
      })

      annotations.push({
        name: "hairstyle",
        begin: guestOffset + GUEST_HAIRSTYLE_OFFSET,
        length: 1,
        color: "var(--teal)",
      })

      annotations.push({
        name: "appearance gender/color",
        begin: guestOffset + GUEST_GENDER_COLORS_OFFSET,
        length: 1,
        color: "var(--sky)",
      })
      annotations.push({
        name: "hair color",
        begin: guestOffset + GUEST_HAIR_COLOR_OFFSET,
        length: 1,
        color: "var(--sapphire)",
      })
      annotations.push({
        name: "body type w",
        begin: guestOffset + GUEST_BODY_TYPE_W,
        length: 2,
        color: "var(--teal)",
      })
      annotations.push({
        name: "body type h",
        begin: guestOffset + GUEST_BODY_TYPE_H,
        length: 2,
        color: "var(--teal)",
      })
      annotations.push({
        name: "alchemy count",
        begin: guestOffset + GUEST_ALCHEMY_COUNT,
        length: 2,
        color: "var(--blue)",
      })
      annotations.push({
        name: "victory count",
        begin: guestOffset + GUEST_VICTORY_COUNT_OFFSET,
        length: 2,
        color: "var(--blue)",
      })
      annotations.push({
        name: "defeated monster completion",
        begin: guestOffset + GUEST_MONSTER_COUNT_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "item completion",
        begin: guestOffset + GUEST_ITEM_COUNT_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "accolade count",
        begin: guestOffset + GUEST_ACCOLADE_COUNT_OFFSET,
        length: 2,
        color: "var(--blue)",
      })
      annotations.push({
        name: "grottos cleared",
        begin: guestOffset + GUEST_GROTTO_COUNT_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "wardrobe completion",
        begin: guestOffset + GUEST_WARDROBE_COUNT_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "alchemy performed",
        begin: guestOffset + GUEST_QUEST_GUEST_ALCHEMY_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "color",
        begin: guestOffset + GUEST_COLOR_OFFSET,
        length: 1,
        color: "var(--peach)",
      })

      annotations.push({
        name: "birthday",
        begin: guestOffset + GUEST_BIRTHDAY_OFFSET,
        length: 4,
        color: "var(--blue)",
      })

      annotations.push({
        name: "speech style",
        begin: guestOffset + GUEST_SPEECH_STYLE_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "age secret byte",
        begin: guestOffset + GUEST_SECRET_AGE_OFFSET,
        length: 1,
        color: "var(--blue)",
      })

      annotations.push({
        name: "title top",
        begin: guestOffset + GUEST_TITLE_TOP_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "title/origin data",
        begin: guestOffset + GUEST_TITLE_ORIGIN_OFFSET,
        length: 2,
        color: "var(--blue)",
      })

      annotations.push({
        name: "message",
        begin: guestOffset + GUEST_MESSAGE_OFFSET,
        length: GUEST_MESSAGE_LENGTH,
        color: "var(--blue)",
      })

      const grottoOffset = guestOffset + GUEST_HELD_GROTTO_OFFSET

      annotations.push({
        name: `held grotto`,
        begin: grottoOffset,
        length: GROTTO_DATA_SIZE,
        color: "var(--lavender)",
      })

      annotations.push({
        name: `kind/state`,
        begin: grottoOffset + GROTTO_KIND_STATE_OFFSET,
        length: 1,
        color: "var(--peach)",
      })

      annotations.push({
        name: `conquerer name`,
        begin: grottoOffset + GROTTO_CONQUERED_BY_OFFSET,
        length: NAME_LENGTH,
        color: "var(--mauve)",
      })

      annotations.push({
        name: `discoverer name`,
        begin: grottoOffset + GROTTO_DISCOVERED_BY_OFFSET,
        length: NAME_LENGTH,
        color: "var(--blue)",
      })

      annotations.push({
        name: `location`,
        begin: grottoOffset + GROTTO_LOCATION_OFFSET,
        length: 1,
        color: "var(--green)",
      })
      annotations.push({
        name: `treasure plundered`,
        begin: grottoOffset + GROTTO_TREASURE_PLUNDERED_OFFSET,
        length: 1,
        color: "var(--green)",
      })
      annotations.push({
        name: `rank/legacy boss`,
        begin: grottoOffset + GROTTO_RANK_LEGACY_BOSS_OFFSET,
        length: 1,
        color: "var(--teal)",
      })

      annotations.push({
        name: `legacy boss level`,
        begin: grottoOffset + GROTTO_LEGACY_BOSS_LEVEL_OFFSET,
        length: 1,
        color: "var(--sapphire)",
      })

      annotations.push({
        name: `seed/turns`,
        begin: grottoOffset + GROTTO_SEED_TURNS_OFFSET,
        length: 2,
        color: "var(--sapphire)",
      })
    }
  }

  // items
  {
    for (const [id, table] of Object.entries(gameData.itemTables)) {
      annotations.push({
        name: `${gameData.itemTypeNames[id]} bag ids`,
        begin: slotOffset + itemOffsets[id].idOffset,
        length: table.length * 2,
        color: "var(--mauve)",
      })

      annotations.push({
        name: `${gameData.itemTypeNames[id]} bag counts`,
        begin: slotOffset + itemOffsets[id].countOffset,
        length: table.length,
        color: "var(--red)",
      })
    }
  }

  // quests
  {
    annotations.push({
      name: `quest statuses`,
      begin: slotOffset + QUEST_STATUS_OFFSET,
      length: gameData.quests.length * 0.5,
      color: "var(--sky)",
    })

    annotations.push({
      name: `quest cleared bitflag`,
      begin: slotOffset + QUEST_CLEARED_OFFSET,
      length: gameData.quests.length / 8,
      color: "var(--teal)",
    })

    for (const q of gameData.quests) {
      annotations.push({
        name: `"${q.name}" time`,
        begin: slotOffset + QUEST_TIMES_OFFSET + q.id * 4,
        length: 4,
        color: "var(--green)",
      })
    }
  }

  // records
  {
    for (let i = 0; i < gameData.monsters.length; i++) {
      annotations.push({
        name: `defeated ${gameData.monsters[i]} data`,
        begin: slotOffset + DEFEATED_MONSTER_DATA_OFFSET + i * 4,
        length: 4,
        color: "var(--mauve)",
      })
    }
  }

  // dlc
  {
    annotations.push({
      name: "special guests",
      begin: slotOffset + SPECIAL_GUEST_OFFSET,
      length: 4,
      color: "var(--mauve)",
    })

    annotations.push({
      name: "dqvc message",
      begin: slotOffset + DQVC_MESSAGE_OFFSET,
      length: DQVC_MESSAGE_LENGTH,
      color: "var(--mauve)",
    })

    annotations.push({
      name: "dqvc message expiry datetime",
      begin: slotOffset + DQVC_MESSAGE_EXPIRY_TIME_OFFSET,
      length: 4,
      color: "var(--blue)",
    })

    for (let i = 0; i < 6; i++) {
      const itemOffset = slotOffset + DQVC_ITEMS_OFFSET + DQVC_ITEM_SIZE * i

      annotations.push({
        name: `dqvc item ${i}`,
        begin: itemOffset + DQVC_ITEMS_ITEM_OFFSET,
        length: 2,
        color: "var(--green)",
      })

      annotations.push({
        name: `dqvc stock/price ${i}`,
        begin: itemOffset + DQVC_ITEMS_PRICE_STOCK_OFFSET,
        length: 1,
        color: "var(--sapphire)",
      })
    }
  }

  // misc
  {
    annotations.push({
      name: "gold on hand",
      begin: slotOffset + GOLD_ON_HAND_OFFSET,
      length: 4,
      color: "var(--yellow)",
    })

    annotations.push({
      name: "gold in bank",
      begin: slotOffset + GOLD_IN_BANK_OFFSET,
      length: 4,
      color: "var(--yellow)",
    })

    annotations.push({
      name: "mini medeals",
      begin: slotOffset + MINI_MEDAL_OFFSET,
      length: 4,
      color: "var(--yellow)",
    })

    annotations.push({
      name: "learned party tricks",
      begin: slotOffset + PARTY_TRICK_LEARNED_OFFSET,
      length: 4,
      color: "var(--green)",
    })

    // playtime
    {
      annotations.push({
        name: "play time",
        begin: slotOffset + PLAYTIME_HOURS,
        length: 4,
        color: "var(--blue)",
      })

      annotations.push({
        name: "hours",
        begin: slotOffset + PLAYTIME_HOURS,
        length: 2,
        color: "var(--red)",
      })

      annotations.push({
        name: "minutes",
        begin: slotOffset + PLAYTIME_MINUTES,
        length: 1,
        color: "var(--red)",
      })

      annotations.push({
        name: "seconds",
        begin: slotOffset + PLAYTIME_SECONDS,
        length: 1,
        color: "var(--red)",
      })
    }

    // multiplayer time
    {
      annotations.push({
        name: "multiplayer time",
        begin: slotOffset + MULTIPLAYER_HOURS,
        length: 4,
        color: "var(--blue)",
      })

      annotations.push({
        name: "hours",
        begin: slotOffset + MULTIPLAYER_HOURS,
        length: 2,
        color: "var(--red)",
      })

      annotations.push({
        name: "minutes",
        begin: slotOffset + MULTIPLAYER_MINUTES,
        length: 1,
        color: "var(--red)",
      })

      annotations.push({
        name: "seconds",
        begin: slotOffset + MULTIPLAYER_SECONDS,
        length: 1,
        color: "var(--red)",
      })
    }

    annotations.push({
      name: "unlockable vocations bitflags",
      begin: slotOffset + UNLOCKABLE_VOCATION_OFFSET,
      length: 2,
      color: "var(--lavender)",
    })

    annotations.push({
      name: "visited locations bitflags",
      begin: slotOffset + VISITED_LOCATIONS_OFFSET,
      length: 3,
      color: "var(--blue)",
    })
  }

  // checksums
  {
    annotations.push({
      name: "checksum A",
      begin: slotOffset + CHECKSUM_A_OFFSET,
      length: 4,
      color: "var(--flamingo)",
    })

    annotations.push({
      name: "checksum B",
      begin: slotOffset + CHECKSUM_B_OFFSET,
      length: 4,
      color: "var(--flamingo)",
    })

    annotations.push({
      name: "checksum C",
      begin: slotOffset + CHECKSUM_C_OFFSET,
      length: 4,
      color: "var(--flamingo)",
    })
  }
}

// system
annotations.push({
  name: "magic number",
  begin: 0,
  length: 15,
  color: "var(--blue)",
})

annotations.push({
  name: "is intermission",
  begin: IS_QUICK_SAVE_OFFSET,
  length: 1,
  color: "var(--lavender)",
})

annotations.push({
  name: "save exists",
  begin: SAVE_EXISTS_OFFSET,
  length: 1,
  color: "var(--peach)",
})
