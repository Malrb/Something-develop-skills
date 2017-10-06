var temp = "<?php echo $cond ?>";
var mySelect = document.getElementById('Cond');
                            
for(var i, j = 0; i = mySelect.options[j]; j++) {
    if(i.value == temp) {
        mySelect.selectedIndex = j;
        break;
    }
}
//若資料刻在前版上 可利用js控制對比資料迴圈做篩選並"selected"
