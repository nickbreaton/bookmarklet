<script>
    import { onMount } from "svelte";
    import * as monaco from 'monaco-editor';

    export let value = ''

    let container

    self.MonacoEnvironment = {
        getWorkerUrl: function (moduleId, label) {
            if (label === 'typescript' || label === 'javascript') {
                return './ts.worker.bundle.js';
            }
            return './editor.worker.bundle.js';
        }
    }

    onMount(() => {
        const editor = monaco.editor.create(container, {
            value,
            language: 'javascript',
            minimap: {
                enabled: false
            }
        });

        editor.onDidChangeModelContent(() => {
            value = editor.getValue()
        })

        return () => editor.dispose()
    })
</script>

<div bind:this={container}></div>

<style>
    div {
        width: 500px;
        height: 500px;
    }
</style>