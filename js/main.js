var app = {


    initialize: function() {
        var self = this;

        this.store = new LocalStorageStore(function() {
            self.showAlert('Hi there', 'Welcome to Kebokun App');
            $('body').html(new HomeView(self.store).render().el);
        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    showAlert: function (title, message) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        }
        else {
            alert(title ? (title + ": " + message) : message);
        }
    }
};

app.initialize();
