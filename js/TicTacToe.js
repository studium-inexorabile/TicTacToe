let error = false
let bOne = $('#box1Text')
let bTwo = $('#box2Text')
let bThree = $('#box3Text')
let bFour = $('#box4Text')
let bFive = $('#box5Text')
let bSix = $('#box6Text')
let bSeven = $('#box7Text')
let bEight = $('#box8Text')
let bNine = $('#box9Text')
let freeSpaces = [bOne, bTwo, bThree, bFour, bFive, bSix, bSeven, bEight, bNine]
let player = ""
let computer = ""
let gameOver = false

const userPlay = function(box){
//userPlay is given a parameter which corresponds to which box the user decided to play in
  if(gameOver){
    return false
  }
//If user chooses free box, play occurs
  if(box.text() == ""){
    box.text(player)
    freeSpaces.splice(freeSpaces.indexOf(box), 1)
    error = false
  }
//If chosen box is not free, user is alerted to pick free box
  else {
    alert("Please pick a free square")
    error = true
  }
//All plays are followed by the checkWin() function to see if a winning scenario has occurrred
  checkWin()
//Computer play occurs after user play
  compPlay()
}

const compPlay = function(){
  let spot
  if(error || gameOver){
    return false
  }
//Checks for possible WIN scenarios
  if($('#box1Text').text() == computer && $('#box1Text').text() == $('#box2Text').text() && $('#box3Text').text() == ""){
    spot = freeSpaces.indexOf(bThree)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box4Text').text() == computer && $('#box4Text').text() == $('#box5Text').text() && $('#box6Text').text() == ""){
    spot = freeSpaces.indexOf(bSix)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box6Text').text() == computer && $('#box6Text').text() == $('#box5Text').text() && $('#box4Text').text() == ""){
    spot = freeSpaces.indexOf(bFour)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == computer && $('#box7Text').text() == $('#box8Text').text() && $('#box9Text').text() == ""){
    spot = freeSpaces.indexOf(bNine)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == computer && $('#box1Text').text() == $('#box4Text').text() && $('#box7Text').text() == ""){
    spot = freeSpaces.indexOf(bSeven)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == computer && $('#box7Text').text() == $('#box4Text').text() && $('#box1Text').text() == ""){
    spot = freeSpaces.indexOf(bOne)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box2Text').text() == computer && $('#box2Text').text() == $('#box5Text').text() && $('#box8Text').text() == ""){
    spot = freeSpaces.indexOf(bEight)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box8Text').text() == computer && $('#box8Text').text() == $('#box5Text').text() && $('#box2Text').text() == ""){
    spot = freeSpaces.indexOf(bTwo)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box3Text').text() == computer && $('#box3Text').text() == $('#box6Text').text() && $('#box9Text').text() == ""){
    spot = freeSpaces.indexOf(bNine)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box9Text').text() == computer && $('#box9Text').text() == $('#box6Text').text() && $('#box3Text').text() == ""){
    spot = freeSpaces.indexOf(bThree)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == computer && $('#box1Text').text() == $('#box5Text').text() && $('#box9Text').text() == ""){
    spot = freeSpaces.indexOf(bNine)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box9Text').text() == computer && $('#box9Text').text() == $('#box5Text').text() && $('#box1Text').text() == ""){
    spot = freeSpaces.indexOf(bOne)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box3Text').text() == computer && $('#box3Text').text() == $('#box5Text').text() && $('#box7Text').text() == ""){
    spot = freeSpaces.indexOf(bSeven)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == computer && $('#box7Text').text() == $('#box5Text').text() && $('#box3Text').text() == ""){
    spot = freeSpaces.indexOf(bThree)
    console.log("Hey")
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == computer && $('#box1Text').text() == $('#box3Text').text() && $('#box2Text').text() == ""){
    spot = freeSpaces.indexOf(bTwo)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == computer && $('#box1Text').text() == $('#box7Text').text() && $('#box4Text').text() == ""){
    spot = freeSpaces.indexOf(bFour)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box3Text').text() == computer && $('#box3Text').text() == $('#box9Text').text() && $('#box6Text').text() == ""){
    spot = freeSpaces.indexOf(bSix)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == computer && $('#box7Text').text() == $('#box9Text').text() && $('#box8Text').text() == ""){
    spot = freeSpaces.indexOf(bEight)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
//Checks for possible DEFENSIVE scenarios
  else if($('#box1Text').text() == player && $('#box1Text').text() == $('#box2Text').text() && $('#box3Text').text() == ""){
    spot = freeSpaces.indexOf(bThree)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box4Text').text() == player && $('#box4Text').text() == $('#box5Text').text() && $('#box6Text').text() == ""){
    spot = freeSpaces.indexOf(bSix)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box6Text').text() == player && $('#box6Text').text() == $('#box5Text').text() && $('#box4Text').text() == ""){
    spot = freeSpaces.indexOf(bFour)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == player && $('#box7Text').text() == $('#box8Text').text() && $('#box9Text').text() == ""){
    spot = freeSpaces.indexOf(bNine)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == player && $('#box1Text').text() == $('#box4Text').text() && $('#box7Text').text() == ""){
    spot = freeSpaces.indexOf(bSeven)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == player && $('#box7Text').text() == $('#box4Text').text() && $('#box1Text').text() == ""){
    spot = freeSpaces.indexOf(bOne)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box2Text').text() == player && $('#box2Text').text() == $('#box5Text').text() && $('#box8Text').text() == ""){
    spot = freeSpaces.indexOf(bEight)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box8Text').text() == player && $('#box8Text').text() == $('#box5Text').text() && $('#box2Text').text() == ""){
    spot = freeSpaces.indexOf(bTwo)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box3Text').text() == player && $('#box3Text').text() == $('#box6Text').text() && $('#box9Text').text() == ""){
    spot = freeSpaces.indexOf(bNine)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box9Text').text() == player && $('#box9Text').text() == $('#box6Text').text() && $('#box3Text').text() == ""){
    spot = freeSpaces.indexOf(bThree)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == player && $('#box1Text').text() == $('#box5Text').text() && $('#box9Text').text() == ""){
    spot = freeSpaces.indexOf(bNine)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box9Text').text() == player && $('#box9Text').text() == $('#box5Text').text() && $('#box1Text').text() == ""){
    spot = freeSpaces.indexOf(bOne)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box3Text').text() == player && $('#box3Text').text() == $('#box5Text').text() && $('#box7Text').text() == ""){
    spot = freeSpaces.indexOf(bSeven)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == player && $('#box7Text').text() == $('#box5Text').text() && $('#box3Text').text() == ""){
    spot = freeSpaces.indexOf(bThree)
    console.log("Hey")
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == player && $('#box1Text').text() == $('#box3Text').text() && $('#box2Text').text() == ""){
    spot = freeSpaces.indexOf(bTwo)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box1Text').text() == player && $('#box1Text').text() == $('#box7Text').text() && $('#box4Text').text() == ""){
    spot = freeSpaces.indexOf(bFour)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box3Text').text() == player && $('#box3Text').text() == $('#box9Text').text() && $('#box6Text').text() == ""){
    spot = freeSpaces.indexOf(bSix)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else if($('#box7Text').text() == player && $('#box7Text').text() == $('#box9Text').text() && $('#box8Text').text() == ""){
    spot = freeSpaces.indexOf(bEight)
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
  else{
//If no wiining/defense scenario found the center spot is next option
//if not available plays random
    spot = freeSpaces.indexOf(bFive)
    if(spot == -1){
      spot = Math.floor(Math.random() * freeSpaces.length)
    }
    freeSpaces[spot].text(computer).hide().fadeIn(1000)
    freeSpaces.splice(spot, 1)
  }
//All plays are followed by the checkWin() function to see if a winning scenario has occurrred
  checkWin()
}

const checkWin = function(box){
  if(error){
    return false
  }
//Checks all scenarios that would result in win
  if($('#box1Text').text() != "" && $('#box1Text').text() == $('#box2Text').text() && $('#box2Text').text() == $('#box3Text').text()){
    $('#box1Text').addClass('font-italic text-muted')
    $('#box2Text').addClass('font-italic text-muted')
    $('#box3Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box1Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
  else if($('#box4Text').text() != "" && $('#box4Text').text() == $('#box5Text').text() && $('#box5Text').text() == $('#box6Text').text()){
    $('#box4Text').addClass('font-italic text-muted')
    $('#box5Text').addClass('font-italic text-muted')
    $('#box6Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box4Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
  else if($('#box7Text').text() != "" && $('#box7Text').text() == $('#box8Text').text() && $('#box8Text').text() == $('#box9Text').text()){
    $('#box7Text').addClass('font-italic text-muted')
    $('#box8Text').addClass('font-italic text-muted')
    $('#box9Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box7Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
  else if($('#box1Text').text() != "" && $('#box1Text').text() == $('#box4Text').text() && $('#box4Text').text() == $('#box7Text').text()){
    $('#box1Text').addClass('font-italic text-muted')
    $('#box4Text').addClass('font-italic text-muted')
    $('#box7Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box1Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
  else if($('#box2Text').text() != "" && $('#box2Text').text() == $('#box5Text').text() && $('#box5Text').text() == $('#box8Text').text()){
    $('#box2Text').addClass('font-italic text-muted')
    $('#box5Text').addClass('font-italic text-muted')
    $('#box8Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box2Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
  else if($('#box3Text').text() != "" && $('#box3Text').text() == $('#box6Text').text() && $('#box6Text').text() == $('#box9Text').text()){
    $('#box3Text').addClass('font-italic text-muted')
    $('#box6Text').addClass('font-italic text-muted')
    $('#box9Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box3Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
  else if($('#box1Text').text() != "" && $('#box1Text').text() == $('#box5Text').text() && $('#box5Text').text() == $('#box9Text').text()){
    $('#box1Text').addClass('font-italic text-muted')
    $('#box5Text').addClass('font-italic text-muted')
    $('#box9Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box1Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
  else if($('#box3Text').text() != "" && $('#box3Text').text() == $('#box5Text').text() && $('#box5Text').text() == $('#box7Text').text()){
    $('#box3Text').addClass('font-italic text-muted')
    $('#box5Text').addClass('font-italic text-muted')
    $('#box7Text').addClass('font-italic text-muted')
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>' + $('#box3Text').text() + '</strong> Wins!<br>Reset for new game...</div>')
    gameOver = true
  }
//Checks for scenario that would result in DRAW
  else if(freeSpaces.length == 0){
    $('#win').html('<div class="alert alert-warning text-center" role="alert"><strong>Draw!</strong><br>Reset for new game...</div>')
    gameOver = true
  }
}

//event listeners for all 9 possible spots to play
$('#box1').on('click', function(){userPlay(bOne)})
$('#box2').on('click', function(){userPlay(bTwo)})
$('#box3').on('click', function(){userPlay(bThree)})
$('#box4').on('click', function(){userPlay(bFour)})
$('#box5').on('click', function(){userPlay(bFive)})
$('#box6').on('click', function(){userPlay(bSix)})
$('#box7').on('click', function(){userPlay(bSeven)})
$('#box8').on('click', function(){userPlay(bEight)})
$('#box9').on('click', function(){userPlay(bNine)})
//event listeners for X/O select at beginning of game
$('#selectO').on('click', function(){
//based on user selection, player/computer variables will be assigned
  player = "O"
  computer = "X"
  $('#select').addClass('d-none')
  $('#container').removeClass('d-none')
  compPlay()
})
$('#selectX').on('click', function(){
//based on user selection, player/computer variables will be assigned
  player = "X"
  computer = "O"
  $('#select').addClass('d-none')
  $('#container').removeClass('d-none')
})
