
window.onload = function () {

  console.log('dfasf')
  const resumeDom = document.getElementById('resume')
  const printButton = document.getElementById('print')
  
  const onPrintClick = () => {
    console.log('You click print button.')
    window.print(resumeDom)
  }

  printButton.addEventListener('click', onPrintClick)

}