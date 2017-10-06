var temp = "<?php echo $cond ?>";
var mySelect = document.getElementById('Cond');
                            
for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == temp) {
        mySelect.selectedIndex = j;
        break;
    }
}