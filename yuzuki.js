let metaKeyDown = false;
document.onkeydown = (e) => {
    let elementById = document.getElementById('editor');
    if (metaKeyDown && e.key === 'Enter') {
        e.preventDefault();
        let div = document.createElement('div');
        div.appendChild(document.createElement('br'));
        elementById.appendChild(div);
    } else if (e.key === 'Control') {
        metaKeyDown = true;
    }
};

document.onkeyup = (e) => {
    if (e.key === 'Control') {
        metaKeyDown = false;
    }
};

function init() {
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            let parentNode = mutation.target.parentNode;

            if (!parentNode) {
                return;
            }

            if (parentNode.innerHTML === '#&nbsp;') {
                parentNode.innerHTML = '<br />';
                h1();
            } else if (parentNode.innerHTML === '##&nbsp;') {
                parentNode.innerHTML = '<br />';
                h2();
            } else if (parentNode.innerHTML === '###&nbsp;') {
                parentNode.innerHTML = '<br />';
                h3();
            } else if (parentNode.innerHTML === '####&nbsp;') {
                parentNode.innerHTML = '<br />';
                h4();
            } else if (parentNode.innerHTML === '&gt;&nbsp;') {
                parentNode.innerHTML = '<br />';
                inyou();
            } else if (parentNode.innerHTML === '-&nbsp;') {
                parentNode.innerHTML = '<br />';
                list();
            } else if (parentNode.innerHTML === '1.&nbsp;') {
                parentNode.innerHTML = '<br />';
                listwithnumber();
            } else if (parentNode.innerHTML === '-[') {
                parentNode.innerHTML = '<br />';
                todo();
            } else if (parentNode.innerHTML === '```') {
                parentNode.innerHTML = '<br />';
                document.execCommand('formatBlock', false, 'div');
                code();
            } else if (parentNode.innerHTML === '`&nbsp;') {
                parentNode.innerHTML = '<br />';
                codeOneLine();
            } else if (parentNode.innerHTML === '*&nbsp;' || parentNode.innerHTML === '_&nbsp;') {
                parentNode.innerHTML = '<br />';
                em();
            } else if (parentNode.innerHTML === '**&nbsp;' || parentNode.innerHTML === '__&nbsp;') {
                parentNode.innerHTML = '<br />';
                strong();
            } else if (parentNode.innerHTML === '~~&nbsp;') {
                parentNode.innerHTML = '<br />';
                del();
            } else if (parentNode.innerHTML === '---') {
                parentNode.innerHTML = '<br />';
                hr();
            }
        });
    });
    // const editor = document.getElementById('editor');
    // const options = {
    //     characterData: true,
    //     subtree: true
    // };
    // observer.observe(editor, options);
}

function h1() {
    document.execCommand('insertHTML', false, `<h1><br></h1>`);
}

function h2() {
    document.execCommand('insertHTML', false, `<h2><br></h2>`);
}
function h3() {
    document.execCommand('insertHTML', false, `<h3><br></h3>`);
}

function h4() {
    document.execCommand('insertHTML', false, `<h4><br></h4>`);
    document.execCommand('', false, 'h4');
}

function inyou() {
    document.execCommand('insertHTML', false, `<blockquote><br></blockquote>`);
}

function list() {
    document.execCommand('insertUnorderedList');
}

function listwithnumber() {
    document.execCommand('insertOrderedList');
}

function a() {
}

function todo() {
    document.execCommand('insertHTML', false, `<input type="checkbox">`);
}

function code() {
    document.execCommand('insertHTML', false, `<pre><code><br></code></pre>`);
}

function codeOneLine() {
    document.execCommand('insertHTML', false, '<pre><code><br></code></pre>');
}

function em() {
    document.execCommand('italic');
}

function strong() {
    document.execCommand('bold');
}

function del() {
    document.execCommand('strikeThrough', false);
}

function hr() {
    document.execCommand('insertHorizontalRule');

    let div = document.createElement('div');
    div.appendChild(document.createElement('br'));
    document.getElementById('editor').appendChild(div);
}

function addImage() {
    let img = document.createElement("img");
    img.setAttribute("src", "https://rr.img.naver.jp/mig?src=http%3A%2F%2Fimgcc.naver.jp%2Fkaze%2Fmission%2FUSER%2F20161117%2F22%2F2588322%2F12%2F500x444x72dac6e66606845b0a493c55.jpg%2F300%2F600&twidth=300&theight=0&qlt=80&res_format=jpg&op=r");
    document.getElementById("items").appendChild(img);
}