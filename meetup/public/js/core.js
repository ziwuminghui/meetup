Function.prototype.method = function(name, func) {
    this.prototype[name] = func;
    return this;
};

if(!String.prototype.trim){ //判断下浏览器是否自带有trim()方法
    String.method('trim', function() {
            return this.replace(/^s+|s+$/g, '');
    });
}

function validate_number() {
    var number = $('#number_be_searched').val();
    if( number != undefined && number.trim().length > 0) {
        number = number.trim();
//        number = number.replace(/-/, "");
        var reg = /(^(400|800)\d{7}$)|(^1\d{10}$)|(^0\d{9,11}$)/;
		if(!reg.test(number)){  
            alert('请输入有效的电话号码查询，手机号为11位长度，固话号为区号+座机号');
			return false;
		}
        return true;
//        $('.search_form').submit();
    }
    return false;
}

function check_number() {
	
	var number = $("#number_input").val();
	number = $.trim(number);
	if(number == "" || number== $("#number_input").attr('placeholder')){
		$("#tip_phonenumber").html("请输入号码");
		$("#tip_phonenumber").show();
        $("#number_input").focus();
		return false;
	} else {
		//number= number.replace(/-/,"");
		//var reg = /^\d+$/;
		var reg = /(^(400|800)\d{7}$)|(^1\d{10}$)|(^0\d{9,11}$)/;
		if(!reg.test(number)){  
			//$("#tip_number").html("您输入的电话号码不准确，请仔细检查");
			$("#tip_phonenumber").html("电话号码不准确，固话加上区号，不能出现-、+及空格等特殊符号");
			$("#tip_phonenumber").show();
            $("#number_input").focus();
			return false;
		}
	}
	$("#tip_phonenumber").hide();
	return true;
}

function check_tag() {
	var tag = $("#tag_input").val();
	tag = $.trim(tag);
	if(tag == "" || tag == $("#tag_input").attr('placeholder')){
		$("#tip_tag").html("请输入显示名称");
		$("#tip_tag").show();
        $("#tag_input").focus();
		return false;
	} else {
        if(tag.length <= 1 || tag.length > 28) {
            $("#tip_tag").html("显示名称必须在2~28个字之间");
            $("#tip_tag").show();   
            $("#tag_input").focus();
            return false;
        }
    }
	$("#tip_tag").hide();
	return true;
}

function check_uploaded_number(){
    var exsit = false;
	var number = $("#number_input").val();
	number = $.trim(number);
	$.ajax({ 
		type : "post", 
		url : "ajax/check_upload.php",
		data:{ 'number':number},
        async: false,
		success : function(resData) {
			if( resData == "1") {
		    	   $("#tip_phonenumber").html("该号码已被审核通过，禁止重复提交");
					$("#tip_phonenumber").show();
                    $("#number_input").focus();
                    exsit = true;
		     } else {
		    	 $("#tip_phonenumber").hide();
		    	 exsit = false;
		    }
		} 
	}); 
	return exsit;
}

function check_checkbox_status() {
    if($('#agreement_checkbox').prop('checked') == false) {
        $('#tip_agreement').html('未勾选用户协议');
        $('#agreement_checkbox').focus();
		$('#tip_agreement').show();
		return false;
    }
	$('#tip_agreement').hide();
    return true;
}


function check_number_loc(){
	var number;
	
	if($('#number_input').val()!=''){
		var reg = /(^(400|800)\d{7}$)|(^1\d{10}$)|(^0\d{9,11}$)/;
		if(!reg.test($('#number_input').val())){  
			
			$("#tip_phonenumber").html("电话号码不准确，固话加上区号，不能出现-、+及空格等特殊符号");
			$("#tip_phonenumber").show();
            $("#number_input").focus();
			return false;
		}
		else{
			$("#tip_phonenumber").hide();
			$("#preview_loc").html('');
		}
	}
	
	if(num_list.length>0){
		
		if($('#number_input').val()==''){
			$("#tip_phonenumber").hide();
			number=num_list[0];
			document.getElementById('preview_number').innerHTML=number;
		}
		else{
			number=$('#number_input').val();
			document.getElementById('preview_number').innerHTML=$('#number_input').val();
		}
		
	}
	else{
		number=$('#number_input').val();
		document.getElementById('preview_number').innerHTML=number;
	}
	
	number = $.trim(number);
	$.ajax({ 
		type : "get", 
		url : "ajax/loc.php",
		data:{ 'number':number},
        async: false,
		success : function(loc) {
			if(loc=='中国' || loc==''){
				
			}
			else{
				$("#preview_loc").html(loc);
			}
		}
	}); 
	
}