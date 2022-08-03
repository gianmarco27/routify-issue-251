<script>

    import {goto, url} from "@roxi/routify";
</script>

<div>
    <a href={$url('api.show', {showId: 30960})}>Go to KobraKai with a link</a>
    <button on:click={() => $goto('api.show', {showId: 30960})}>Go to KobraKai with Goto</button>
</div>