<script>
function sum(){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let sum = parseFloat(number1)+parseFloat(number2);
    document.getElementById('result').value = sum;
}
</script>