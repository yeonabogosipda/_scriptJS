<script>
    var person = {
        firstname: "Daniel"
        lastname: "Nielsen",
        age: 25,
        haircolor: "Brown",
        fullname: function() {
                return "The persons name is "+ this.firstname+ " " + this.lastname;
          }
    };
    document.write(person.fullname());
</script>
