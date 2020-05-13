//隨機密碼函式
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

// 設定密碼函式
function generatePassword(options) {
  // 設定密碼箱全種類
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'

  //設定假資料，方便使用
  // const options = {
  //   length: 12,
  //   lowercase: 'on',
  //   uppercase: 'on',
  //   numbers: 'on',
  //   excludeCharacters: '40'
  // }
  // console.log('options', options)

  // 設定用戶所要的密碼種類
  let collection = []

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // console.log('collection', collection)


  // 移除用戶不要的項目
  if (options.excludeCharacters) {
    console.log(`exclude characters: ${options.excludeCharacters}`)
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }
  // console.log('collection', collection)

  // 產生密碼
  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }

  //如果沒有勾選密碼類型，回傳錯誤訊息
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }

  // 回傳密碼
  // console.log('password', password)
  return password
}
// 執行函式
// generatePassword()

//使這支JS能被APP.JS或其他檔案帶入使用
module.exports = generatePassword