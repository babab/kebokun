var app = {


    initialize: function() {
        var self = this;

        this.store = new LocalStorageStore(function() {
            self.showAlert('Info', 'Welcome to Kebokun App');
            $('body').html(new HomeView(self.store).render().el);
        });
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
