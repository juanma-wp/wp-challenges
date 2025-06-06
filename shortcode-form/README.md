Task:

    Develop a shortcode that will output a simple contact form. This contact form, when submitted, will use wp_mail to send the email.

Requirements:

    Shortcode needs to have fields: Subject (input), Email (input), Message (textarea),

    Sanitize all fields before being used for sending it,

    Use wp_mail to send the email

    Style it and enqueue style only on pages where the shortcode is

    Display errors on top of the form

Starting Tips:

    Shortcode docs: https://developer.wordpress.org/plugins/shortcodes/

    Check if a post has the shortcode: https://developer.wordpress.org/reference/functions/has_shortcode/
