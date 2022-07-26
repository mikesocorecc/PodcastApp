module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        colors: {
            'regal-green': '#84d9bc',
            'regal-green-hover': '#5dcda7',
            'regal-blue': '#313c4e',
            'secundario': '#313c4e',
            'white-100': '#ffffff'
        },
        container: {
            center: true,
        },
        maxWidth: {
            'container': '1200px',
        },
        extend: {
            backgroundImage: {
                'header': "linear-gradient(rgba(57,70,89,.7),rgba(57,70,89,.7)), url('img/header.jpg')",
                'inicio': 'url(img/icono_inicio.svg)  ',
                'negocio': 'url(img/icono_negocio.svg)',
                'pro': 'url(img/icono_pro.svg)',
                'comillas': 'url(img/comilla.svg)',
            }
        },
    },
    plugins: [],
}