
import crafttweaker.forge.api.event.interact.EntityInteractEvent;
import crafttweaker.api.util.InteractionHand;
import mods.gamestages.StageHelper;
import mods.gamestages.events.GameStageAdded;
import mods.gamestages.events.GameStageRemoved;
import mods.gamestages.events.GameStageCleared;

events.register<GameStageAdded>((event) => {
    if (event.stage == "ftbchunks_mapping") {
        event.entity.sendMessage(" -- Finally - unlock FTB maps and GPS minimap --");
    }
});
StageHelper.grantStageWhenCrafting(<item:kubejs:gps_map>, "ftbchunks_mapping");

