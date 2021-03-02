<script>
    $(function(){
        $( "#btn" ).click(function(event)
        {
            event.preventDefault();
            var email= $("#email").val();

            $.ajax(
                {
                    type:"post",
                    url: "<?php echo base_url(); ?>index.php/blog_c/registre",
                    data:{ email:email},
                    success:function(response)
                    {
                        console.log(response);
                        $("#message").html(response);
                        $('#cartmessage').show();
                    }
                    error: function() 
                    {
                        alert("Invalide!");
                    }
                }
            );
        });
    });
</script>
