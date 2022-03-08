var reportsWidget = {
    options: {
        containerSelector: '.module-faq',
        template: (
            '{{#.}}' +
                '{{#items}}' +
                '<div class="module-faq_item">' +
                    '<div class="module-faq_category">' +
                        '<img class="module-faq_category-icon" src="{{iconPath}}"/>' +
                        '<span class="module-faq_category-category">{{type}}</span>'+
                    '</div>'+
                    '<div class="module-faq_text">' +
                        '<div class="module-faq_question">'+
                            '<h2 class="module-faq_text-question">{{question}}</h2>' +
                        '</div>' +    
                        '<div class="module-faq_answer">'+
                            '<p class="module-faq_text-answer">{{answer}}</p>' +
                        '</div>'+
                    '</div>' +
                '</div>' +
                '{{/items}}' +
            '{{/.}}'                    
        )
    },

    init: function() {
        var templateItems = this.beforeRenderItems(faqContent)
        this.renderFaq(templateItems || []);
        this.complete();
    },

    beforeRenderItems(content){
        console.log("CONTENT", content)

        var modifiedContent = content;

        console.log("MODIFIED CONTENT", modifiedContent)

        for (i = 0; i < modifiedContent.items.length; i++) {
            if (modifiedContent.items[i].type == 'stock') {
                modifiedContent.items[i].iconPath = 'images/icon-stock.png';
            } else if (modifiedContent.items[i].type == 'company') {
                modifiedContent.items[i].iconPath = 'images/icon-company.png';  
            } else if (modifiedContent.items[i].type == 'financial') {
                modifiedContent.items[i].iconPath = 'images/icon-financials.png'; 
            }
        }

        return modifiedContent;
    },

    renderFaq: function(faqItems) {
        var inst = this,
            options = inst.options;

        $(options.containerSelector).html(Mustache.render(options.template, faqItems));
    },

    complete: function() {
        q4App.toggle(
            $('.module-faq'), // Containing Element
            '.module-faq_item', // Individual Item Selector
            '.module-faq_question', // Item Toggler Selector
            '.module-faq_answer', // Item to Toggle Selector
            true, // Accordion functionality?
            true, // Show all / Hide all button?
            true); // Open first item?
    }
};

reportsWidget.init();