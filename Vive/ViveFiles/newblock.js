AFRAME.registerComponent('newblock', {

    schema: {
        default: '',
        parse: AFRAME.utils.styleParser.parse
    },

    init: function () {
        const data = this.data;
        const el = this.el;

        el.addEventListener(data.event, function (event) {
            const block = document.createElement('a-entity');

            var pos = event.detail.intersection.point;
            pos.y = pos.y + 0.5;
            block.setAttribute('position', pos);

            // Set components and properties.
            Object.keys(data).forEach(function(name) {
                if (name === 'event') { return; }
            AFRAME.utils.entity.setComponentProperty(block, name, data[name]);
        });

            el.sceneEl.appendChild(block);
        });
    }


});