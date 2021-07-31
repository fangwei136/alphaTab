// <auto-generated>
// This code was auto-generated.
// Changes to this file may cause incorrect behavior and will be lost if
// the code is regenerated.
// </auto-generated>
import { PlayerSettings } from "@src/PlayerSettings";
import { JsonHelper } from "@src/io/JsonHelper";
import { VibratoPlaybackSettingsSerializer } from "@src/generated/VibratoPlaybackSettingsSerializer";
import { SlidePlaybackSettingsSerializer } from "@src/generated/SlidePlaybackSettingsSerializer";
import { ScrollMode } from "@src/PlayerSettings";
export class PlayerSettingsSerializer {
    public static fromJson(obj: PlayerSettings, m: unknown): void {
        if (!m) {
            return;
        } 
        JsonHelper.forEach(m, (v, k) => this.setProperty(obj, k.toLowerCase(), v)); 
    }
    public static toJson(obj: PlayerSettings | null): Map<string, unknown> | null {
        if (!obj) {
            return null;
        } 
        const o = new Map<string, unknown>(); 
        o.set("soundFont", obj.soundFont); 
        o.set("scrollElement", obj.scrollElement); 
        o.set("enablePlayer", obj.enablePlayer); 
        o.set("enableCursor", obj.enableCursor); 
        o.set("enableAnimatedBeatCursor", obj.enableAnimatedBeatCursor); 
        o.set("enableElementHighlighting", obj.enableElementHighlighting); 
        o.set("enableUserInteraction", obj.enableUserInteraction); 
        o.set("scrollOffsetX", obj.scrollOffsetX); 
        o.set("scrollOffsetY", obj.scrollOffsetY); 
        o.set("scrollMode", obj.scrollMode as number); 
        o.set("scrollSpeed", obj.scrollSpeed); 
        /*@target web*/
        o.set("nativeBrowserSmoothScroll", obj.nativeBrowserSmoothScroll); 
        o.set("songBookBendDuration", obj.songBookBendDuration); 
        o.set("songBookDipDuration", obj.songBookDipDuration); 
        o.set("vibrato", VibratoPlaybackSettingsSerializer.toJson(obj.vibrato)); 
        o.set("slide", SlidePlaybackSettingsSerializer.toJson(obj.slide)); 
        o.set("playTripletFeel", obj.playTripletFeel); 
        return o; 
    }
    public static setProperty(obj: PlayerSettings, property: string, v: unknown): boolean {
        switch (property) {
            case "soundfont":
                obj.soundFont = v as string | null;
                return true;
            case "scrollelement":
                obj.scrollElement = v! as string;
                return true;
            case "enableplayer":
                obj.enablePlayer = v! as boolean;
                return true;
            case "enablecursor":
                obj.enableCursor = v! as boolean;
                return true;
            case "enableanimatedbeatcursor":
                obj.enableAnimatedBeatCursor = v! as boolean;
                return true;
            case "enableelementhighlighting":
                obj.enableElementHighlighting = v! as boolean;
                return true;
            case "enableuserinteraction":
                obj.enableUserInteraction = v! as boolean;
                return true;
            case "scrolloffsetx":
                obj.scrollOffsetX = v! as number;
                return true;
            case "scrolloffsety":
                obj.scrollOffsetY = v! as number;
                return true;
            case "scrollmode":
                obj.scrollMode = JsonHelper.parseEnum<ScrollMode>(v, ScrollMode)!;
                return true;
            case "scrollspeed":
                obj.scrollSpeed = v! as number;
                return true;
            /*@target web*/
            case "nativebrowsersmoothscroll":
                obj.nativeBrowserSmoothScroll = v! as boolean;
                return true;
            case "songbookbendduration":
                obj.songBookBendDuration = v! as number;
                return true;
            case "songbookdipduration":
                obj.songBookDipDuration = v! as number;
                return true;
            case "playtripletfeel":
                obj.playTripletFeel = v! as boolean;
                return true;
        } 
        if (["vibrato"].indexOf(property) >= 0) {
            VibratoPlaybackSettingsSerializer.fromJson(obj.vibrato, v as Map<string, unknown>);
            return true;
        }
        else {
            for (const c of ["vibrato"]) {
                if (property.indexOf(c) === 0) {
                    if (VibratoPlaybackSettingsSerializer.setProperty(obj.vibrato, property.substring(c.length), v)) {
                        return true;
                    }
                }
            }
        } 
        if (["slide"].indexOf(property) >= 0) {
            SlidePlaybackSettingsSerializer.fromJson(obj.slide, v as Map<string, unknown>);
            return true;
        }
        else {
            for (const c of ["slide"]) {
                if (property.indexOf(c) === 0) {
                    if (SlidePlaybackSettingsSerializer.setProperty(obj.slide, property.substring(c.length), v)) {
                        return true;
                    }
                }
            }
        } 
        return false; 
    }
}

