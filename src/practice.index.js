const { createElement } = React
const { render } =ReactDOM

const title = React.createElement(
    'h1',
    { ide: 'title', className: 'header' },
    'Hello World'
)

ReactDom.render(
    title,
    document.getElementById('react-container')
)