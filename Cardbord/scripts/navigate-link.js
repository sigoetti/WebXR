AFRAME.registerComponent('navigate-link',
    {
        schema: {
            on: {type: 'string'},
            link: {type: 'string'}
        },

        init: function () {
            var data = this.data;
            var element = this.el;

            element.addEventListener(data.on, function () {
                window.location.href = data.link;
            });
        }


    }
);