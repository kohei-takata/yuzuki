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
            let innerHTML = parentNode.innerHTML;
            parentNode.innerHTML = '<br />';
            if (!parentNode) {
            } else if (innerHTML === '#&nbsp;') {
                h1();
            } else if (innerHTML === '##&nbsp;') {
                h2();
            } else if (innerHTML === '###&nbsp;') {
                h3();
            } else if (innerHTML === '####&nbsp;') {
                h4();
            } else if (innerHTML === '&gt;&nbsp;') {
                inyou();
            } else if (innerHTML === '-&nbsp;') {
                list();
            } else if (innerHTML === '1.&nbsp;') {
                listwithnumber();
            } else if (innerHTML === '-[') {
                todo();
            } else if (innerHTML === '```') {
                document.execCommand('formatBlock', false, 'div');
                code();
            } else if (innerHTML === '`&nbsp;') {
                codeOneLine();
            } else if (innerHTML === '*&nbsp;' || innerHTML === '_&nbsp;') {
                em();
            } else if (innerHTML === '**&nbsp;' || innerHTML === '__&nbsp;') {
                strong();
            } else if (innerHTML === '~~&nbsp;') {
                del();
            } else if (innerHTML === '---') {
                hr();
            }
        });
    });
    const editor = document.getElementById('editor');
    const options = {
        characterData: true,
        subtree: true
    };
    observer.observe(editor, options);
}

function h1() {
    document.execCommand('formatBlock', false, 'h1');
}

function h2() {
    document.execCommand('formatBlock', false, 'h2');
}
function h3() {
    document.execCommand('formatBlock', false, 'h3');
}

function h4() {
    document.execCommand('formatBlock', false, 'h4');
}

function inyou() {
    document.execCommand('formatBlock', false, 'blockquote');
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