/* -----------------------------------------------------------------------------
    FIGMA PLUGIN PANEL - by PaperTigerAgency — papertiger.com
------------------------------------------------------------------------------*/

function onRun() {
    let figJet = {
        init: function() {
            if (document.getElementById('toolbar-action-fj-panel') == null) {

                // Init Figjet Panel
                let toolbar = document.querySelector('.toolbar_view--toolbar--2396w');

                if(toolbar == null) {
                  toolbar = document.querySelector('.top_bar--headerChildren--2jBsO');
                }

                let buttonGroup = toolbar.lastElementChild;

                let fjActionButton = document.createElement('span');
                    fjActionButton.className = 'toolbar_view--actionButtonContainer--J2txY';
                    // fjActionButton.setAttribute('data-tooltip-text', 'FigJets');

                let fjIconButton = document.createElement('span');
                    fjIconButton.id = 'toolbar-action-fj-panel'
                    fjIconButton.className = 'toolbar_view--iconButton--Zxsnv enabledButton-3';

                let fjIconSvg = document.createElement('img');
                    fjIconSvg.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHRpdGxlPmljbi1maWdqZXQ8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHVzaW5nIEZpZ21hPC9kZXNjPgo8ZyBpZD0iQ2FudmFzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1MDggMTQ1KSI+CjxnIGlkPSJpY24tZmlnamV0Ij4KPHVzZSB4bGluazpocmVmPSIjcGF0aDBfZmlsbCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTUwOCAtMTQ1KSIgZmlsbD0iI0ZGRkZGRiIvPgo8L2c+CjwvZz4KPGRlZnM+CjxwYXRoIGlkPSJwYXRoMF9maWxsIiBkPSJNIDQ4LjUyOTQgMS40NzA1OUwgNTAgMS40NzA1OUwgNTAgMEwgNDguNTI5NCAwTCA0OC41Mjk0IDEuNDcwNTlaTSA0Ny4wNTg4IDI1QyA0Ny4wNTg4IDM3LjE4MjYgMzcuMTgyNiA0Ny4wNTg4IDI1IDQ3LjA1ODhMIDI1IDUwQyAzOC44MDcxIDUwIDUwIDM4LjgwNzEgNTAgMjVMIDQ3LjA1ODggMjVaTSA0Ny4wNTg4IDEuNDcwNTlMIDQ3LjA1ODggMjVMIDUwIDI1TCA1MCAxLjQ3MDU5TCA0Ny4wNTg4IDEuNDcwNTlaTSAyNSAyLjk0MTE4TCA0OC41Mjk0IDIuOTQxMThMIDQ4LjUyOTQgMEwgMjUgMEwgMjUgMi45NDExOFpNIDIuOTQxMTggMjVDIDIuOTQxMTggMTIuODE3MyAxMi44MTcyIDIuOTQxMTggMjUgMi45NDExOEwgMjUgMEMgMTEuMTkyOSAwIDAgMTEuMTkyOSAwIDI1TCAyLjk0MTE4IDI1Wk0gMjUgNDcuMDU4OEMgMTIuODE3MiA0Ny4wNTg4IDIuOTQxMTggMzcuMTgyNiAyLjk0MTE4IDI1TCAwIDI1QyAwIDM4LjgwNzEgMTEuMTkyOSA1MCAyNSA1MEwgMjUgNDcuMDU4OFpNIDIzLjUyOTQgMTQuNzA1OUwgMjMuNTI5NCAyNUwgMjYuNDcwNiAyNUwgMjYuNDcwNiAxNC43MDU5TCAyMy41Mjk0IDE0LjcwNTlaTSAyMy41Mjk0IDI1TCAyMy41Mjk0IDM1LjI5NDFMIDI2LjQ3MDYgMzUuMjk0MUwgMjYuNDcwNiAyNUwgMjMuNTI5NCAyNVpNIDI1IDIzLjUyOTRMIDE0LjcwNTkgMjMuNTI5NEwgMTQuNzA1OSAyNi40NzA2TCAyNSAyNi40NzA2TCAyNSAyMy41Mjk0Wk0gMjUgMjYuNDcwNkwgMzUuMjk0MSAyNi40NzA2TCAzNS4yOTQxIDIzLjUyOTRMIDI1IDIzLjUyOTRMIDI1IDI2LjQ3MDZaIi8+CjwvZGVmcz4KPC9zdmc+Cg==';
                    fjIconSvg.className = 'svg';
                    fjIconSvg.style.width = '45%';

                fjIconButton.addEventListener('click', function() {
                    figJet.toggleDropdown();
                });

                fjIconButton.appendChild(fjIconSvg);
                fjActionButton.appendChild(fjIconButton);
                buttonGroup.appendChild(fjActionButton);

                this.fjActionButton = fjActionButton;

                console.log('[FIGJET]: Panel Ready');
            }
        },
        toggleDropdown: function() {
            if (document.getElementById('toolbar-action-fj-panel').nextSibling == null) {

                // Alloc Dropdown
                let fjDropdown = document.createElement('div');
                    fjDropdown.className = 'pointing_dropdown--root--28JAG';

                let fjDropdownArrow = document.createElement('div');
                    fjDropdownArrow.className = 'pointing_dropdown--arrow--Lu8iU';
                    fjDropdownArrow.style.position = 'absolute';
                    fjDropdownArrow.style.top = '0px';
                    fjDropdownArrow.style.left = '16px';

                let fjDropdownContent = document.createElement('div');
                    fjDropdownContent.className = 'dropdown--dropdown--35dH4 pointing_dropdown--content--2os_K';
                    fjDropdownContent.style.position = 'absolute';
                    fjDropdownContent.style.top = '6px';
                    fjDropdownContent.style.left = '-84px';
                    // To-do: Dynamic Position

                fjDropdown.appendChild(fjDropdownArrow);
                fjDropdown.appendChild(fjDropdownContent);

                this.fjActionButton.appendChild(fjDropdown);
                this.fjDropdownContent = fjDropdownContent;

                console.log('[FIGJET]: Dropdown Ready');

                // Alloc Options
                figJet.loadOptions();

            } else {
                figJet.killDropdown();
            }
        },
        killDropdown: function(){
            // Dealloc Dropdown
            let fjDropdown = document.getElementById('toolbar-action-fj-panel').nextSibling;
            fjDropdown.parentNode.removeChild(fjDropdown);
            console.log('[FIGJET]: Dropdown Killed');
        },
        loadOptions: function(){
            let commands = new Map([
                ['Dark UI', [toggleDarkUI, 'f-ui']]
            ]);

            for (let [key, value] of commands) {
                figJet.addOption(key, value[0], value[1]);
            }
        },
        addOption: function(optionName, optionCallback, optionDOM) {

            // Init Option Menu
            let option = document.createElement('a');
            option.className = 'dropdown--option--20q-- dropdown--optionBase--2PiCW white_text--whiteText--1kui1';
            option.style.padding = '0px 6px';

            let optionLabel = document.createTextNode(optionName);

            let optionAction = document.createElement('div');
            optionAction.className = 'action_option--iconContainer--vjcHT';

            let optionShortcut = document.createElement('span');
            optionShortcut.className = 'action_option--shortcut--24K-Z';
            // TO-DO Add Shortcuts

            //Check Current State
            if (document.getElementById(optionDOM)) {
                optionAction.innerHTML = '<span><span class="svg g5988d2d6"></span></span>';
                optionAction.classList.toggle('is-active');
            }

            option.appendChild(optionAction);
            option.appendChild(optionLabel);
            option.appendChild(optionShortcut);

            option.addEventListener('click', function() {
                if (optionAction.classList.contains('is-active')) {
                  optionAction.innerHTML = '';
                } else {
                  optionAction.innerHTML = '<span><span class="svg g5988d2d6"></span></span>';
                }

                optionAction.classList.toggle('is-active');
                optionCallback();

                figJet.killDropdown();
            });

            this.fjDropdownContent.appendChild(option);
            console.log('[FIGJET]: Option ' + optionName + ' Added');
        },
    }
    figJet.init();
}

/* -----------------------------------------------------------------------------
    FIGJETS
------------------------------------------------------------------------------*/

// To do, generic figjets launcher

function toggleDarkUI() {
    if (document.getElementById('f-ui') === null) {
        let style = document.createElement('style');
        let css = document.createTextNode('[class*=autocomplete_input--input],[class*=autocomplete_input--container],[class*=object_row--rowText],[class*=object_row--rowActions],[class*=scroll_container--scrollBar-]:after{background:0 0}:root{--bg-lightest:#666666;--bg-light:#424242;--bg-base:#212121;--bg-dark:#181818;--bg-darkest:#050505;--bg-active:#30c2ff;--txt-label:#bbbbbb;--txt-disabled:#505050;--txt-symbol:#907cff;--st-rowRowSelected:#2c2c2c;--st-labelActive:#d8d8d8;--st-ActivePressed:#25b5f1}::selection{background:var(--bg-active);color:#fff}[class*=local_components--emptyState],[class*=basic_form--bigTextInput],[class*=full_width_page--fullWidthPage],[class*=new_team_link--newTeamIcon],[class*=file_browser--searchInput],[class*=file_browser--searchIcon],[class*=file_move--folderRowWrapper],[class*=team_upgrade--stepInstructions],[class*=team_upgrade--stepTitle],[class*=team_upgrade--stepSelected] [class*=team_upgrade--stepNumber],[class*=local_components--emptyStateContent],[class*=team_upgrade--step][class*=team_upgrade--stepSelected],[class*=team_upgrade--step-]:hover,[class*=team_upgrade--step-]:hover [class*=team_upgrade--stepNumber],[class*=sidebar_library--navItem],[class*=sidebar_library--tileSectionHeaderNoResults],[class*=sidebar_library--searchInput]::placeholder,[class*=step_pay--flex],[class*=step_pay--subtotal],[class*=step_choose_plan]>*,[class*=step_pay--row]>*,[class*=step_pay--total],[class*=frame_presets--caret],[class*=step_pay--bigTerms],[class*=recent_files_link--recentFilesIcon],[class*=modal--modalContent],[class*=default_notification--notificationInfo],[class*=permissions_modal--inviteInputWrapper],[class*=code_inspection_panels--inspectionPanel],[class*=slider--sliderTrack],[class*=export_picker--warning],[class*=export_panel--chevron],[class*=image_settings_modal--colorAdjustLabel],[class*=frame_presets--name],[class*=raw_components--base],[class*=raw_components--textInput],[class*=raw_components--iconButton],[class*=components_diff--subText] span,[class*=component_tiles--sectionHeader],[class*=component_panel--input],[class*=combo_box--selectInput] .svg,[class*=history_view--time],[class*=shortcuts_modal--shortcutName],[class*=frame_presets--presetName],[class*=object_row--row],[class*=object_row--row][class*=object_row--topLevel][class*=object_row--frame],[class*=object_row--row][class*=object_row--topLevel][class*=object_row--symbol],[class*=basic_form--textInput],html,input,input[class*=file_browser--searchInput]::placeholder{color:var(--txt-label)}[class*=basic_form--bigTextInput],[class*=file_move--folderRowWrapper]:hover,[class*=permissions_modal--inviteInputWrapper],[class*=top_bar--header],[class*=fullscreen_view--filebar],[class*=file_move--main],[class*=file_tile--lowerPart],[class*=autocomplete_results--contactRow],[class*=raw_components--input],[class*=raw_components--chitCenter],[class*=raw_components--modalPanel] [class*=raw_components--input],[class*=draggable_modal--header],[class*=shortcuts_modal--shortcutsModalInner],[class*=pages_panel--pagesButton],[class*=object_row--row][class*=object_row--topLevel][class*=object_row--frame],[class*=object_row--row][class*=object_row--topLevel][class*=object_row--symbol],[class*=textarea],[class*=local_components--pageName],[class*=basic_form--textInput]{background:var(--bg-dark)}[class*=full_width_page--fullWidthPage],[class*=raw_components--modalPanel],[class*=shortcuts_modal--singleCharKeyBox],[class*=shortcuts_modal--multiCharKeyBox],[class*=nav_container--container],[class*=left_panel--panelContainer],[class*=object_row--input],[class*=object_row--row-],[class*=properties_panel--propertiesPanel],[class*=file_move--teamSectionBody],[class*=file_browser--navContent],[class*=components_diff--diff],[class*=export_picker--modal],[class*=sidebar_library--emptyState],[class*=sidebar_library--searchX],[class*=pageContent],[class*=pages_panel--pageRowUnselected],[class*=pages_panel--objectPanelContent],[class*=draggable_modal--frame],[class*=permissions_modal--contentContainer],[class*=progress_bar--progressBarPageCover],[class*=container-4],[class*=scroll_container--track]:hover,[class*=component_tiles--stickySectionHeader]{background:var(--bg-base)}[class*=left_panel--panelContainer],[class*=properties_panel--propertiesPanel],[class*=file_browser--navContent]{border-right:1px solid var(--bg-dark)}[class*=team_upgrade--stepSelected] [class*=team_upgrade--stepNumber],[class*=team_upgrade--step-]:hover,[class*=team_upgrade--step-]:hover [class*=team_upgrade--stepNumber]{border-color:var(--txt-label)}[class*=team--folderNameLink],[class*=team_admin--tableRow] [class*=team_admin--email],[class*=team_admin--tableRow] [class*=team_admin--lastActive],[class*=team--settingsSection] [class*=team--folderLastUpdated],[class*=segmented_control--segment],[class*=segmented_control--segment] svg,[class*=pageContent],[class*=file_tile--subtitle],[class*=file_move--teamSection],[class*=file_move--footer],[class*=role_row--name],[class*=role_row--select],[class*=role_row--nameAndSelect] span,[class*=local_components--publishInfo],[class*=pages_panel--pageNumberOf],[class*=object_row--expandCaret],[class*=properties_panel--tab-],[class*=autocomplete_results--email],[class*=user_notifications_dropdown--dropdownContainer] [class*=row--date],[class*=user_details_modal--roles] [class*=user_details_modal--allAccess],[class*=team--listHeader]{color:var(--bg-lightest)}.cachedSubtree>[class*=raw_components--panel],[class*=team_admin--tableRow],[class*=team_admin--tableRow]:last-child,[class*=history_view--item]:after,[class*=shared_colors--panel],[class*=components_diff--diffRow],[class*=basic_form--bigTextInput],[class*=export_picker--header],[class*=sidebar_library--searchInputWrapperSticky],[class*=sidebar_library--libraryHeader],[class*=properties_panel--rightOfActiveTab],[class*=properties_panel--leftOfActiveTab],[class*=raw_components--panel],[class*=permissions_modal--autocompleteResults],[class*=pages_panel--pagesHeaderContainer],[class*=file_browser--section],[class*=step_pay--rowBorder],[class*=team--row],[class*=team--emptyStateTile],[class*=team--connectionListHeader],[class*=team_admin--proTeamUpsellContent],[class*=new_team_link--newTeam],[class*=step_choose_plan],[class*=permissions_modal--inviteInputWrapper],[class*=nav_container--container],[class*=properties_panel--propertiesPanel],[class*=component_tiles--stickySectionHeader],[class*=properties_panel--tab-],[class*=basic_form--textInput]{border-color:var(--bg-dark)}[class*=raw_components--panelTitle],[class*=basic_form--btn],[class*=default_notification--boldText],[class*=user_notifications_dropdown--boldText],[class*=nav_container--header],[class*=history_view--label],[class*=components_diff--icon] .g09fa2596,[class*=components_diff--diffRowHeader] span:nth-child(2),[class*=export_picker--label],[class*=export_picker--name],[class*=file_tile--title],[class*=file_move--teamTitle],[class*=modal--title],[class*=sidebar_library--tileSectionHeaderSearch],[class*=sidebar_library--back],[class*=sidebar_library--navTitle],[class*=local_components--publishChanges],[class*=local_components--menu],[class*=role_row--folderDisclaimer],[class*=shortcuts_modal--header],[class*=shortcuts_modal--categoryName],[class*=team_link--teamName],[class*=sidebar_library--searchInput],[class*=local_components--pageName],[class*=shortcuts_modal--singleCharKeyBox],[class*=shortcuts_modal--multiCharKeyBox],[class*=pages_panel--pageRowUnselected],[class*=component_tiles--stickySectionHeader],[class*=properties_panel--tab-][class*=properties_panel--activeTab]{color:var(--st-labelActive)}[class*=file_browser--searchSection],[class*=component_panel--input],[class*=pages_panel--pagesButton]{border-color:var(--bg-base)}[class*=team_admin--tableRow]:hover,[class*=file_browser--searchFocusedNavContent] [class*=file_browser--selected][class*=file_browser--sidebarSection]{background-color:var(--bg-light) 50!important}[class*=basic_form--btn]:active,[class*=history_view--itemInfo]:hover,[class*=help_widget--helpWidget],[class*=step_choose_plan--discount]{color:var(--bg-dark)}[class*=modal--modal-],[class*=sidebar_library--searchInput]{background-color:var(--bg-base)}[class*=segmented_control--segment]{background:var(--bg-light)}[class*=segmented_control--segment][class*=segmented_control--segmentSelected],[class*=constraints_panel--selected]:after,[class*=objects_panel--dropTargetLine]{background:var(--bg-active)!important}[class*=segmented_control--segmentSelected],[class*=team_link--selectedTeam] [class*=team_link--teamName],[class*=sidebar_library--navItemCurrentFile]>*,[class*=left_panel--tabIcon] span,[class*=basic_form--greenBtn],[class*=help_widget--tooltip]{color:#fff}[class*=help_widget--helpWidget] svg{fill:var(--bg-darkest)}[class*=segmented_control--segment] svg,[class*=file_sort--caret-] svg,[class*=file_tile--settings-] svg,[class*=object_row--expandCaret] svg{fill:var(--bg-lightest)}[class*=segmented_control--segmentSelected] svg,[class*=left_panel--tabIcon],[class*=object_row--selected] [class*=object_row--layerIcon] svg,[class*=object_row--selected] [class*=object_row--lockIcon] svg,[class*=object_row--selected] [class*=object_row--visibleIcon] svg,[class*=object_row--selected] [class*=object_row--expandCaret] svg{fill:#fff!important}[class*=local_components--emptyState] svg,[class*=new_team_link--newTeamIcon] svg,[class*=file_browser--searchIcon] svg,[class*=file_move--folderRowWrapper],[class*=object_row--layerIcon] svg,[class*=object_row--lockIcon] svg,[class*=object_row--visibleIcon] svg,[class*=recent_files_link--recentFilesIcon] svg,[class*=raw_components--base],[class*=raw_components--iconButton] svg{fill:var(--txt-label)}[class*=team_creation--authorizeSlack],[class*=step_pay--smallGrayText],[class*=importPrompt],[class*=team_upgrade--step-],[class*=raw_components--iconButton][class*=raw_components--iconButtonDisabled],[class*=raw_components--iconButton][class*=raw_components--iconButtonOff],[class*=raw_components--iconButton][class*=raw_components--iconButtonOff] svg{fill:var(--txt-disabled)}[class*=user_notifications_dropdown--arrow]{border-bottom:8px solid var(--bg-darkest)}[class*=user_notifications_dropdown--dropdownContainer]{border:1px solid var(--bg-darkest)}[class*=user_notifications_dropdown--dropdownContainer]:before{border-color:transparent transparent var(--bg-darkest) var(--bg-darkest)}[class*=user_notifications_dropdown--header]{border-bottom:1px solid var(--bg-darkest)}[class*=user_notifications_dropdown--dropdownContainer] [class*=row--row]{border-bottom:1px solid var(--bg-base)}[class*=help_widget--helpWidget]{background:#fff}[class*=basic_form--btn],[class*=basic_form--btn]:disabled,[class*=constraints_panel--selectorContainer]{border-color:var(--bg-light)}[class*=raw_components--rowSelectedSecondary],[class*=raw_components--rowSelectedSecondary] [class*=raw_components--chitCenter],[class*=raw_components--rowSelected] [class*=raw_components--chitCenter],[class*=constraints_panel--top]:after,[class*=constraints_panel--bottom]:after,[class*=constraints_panel--left]:after,[class*=constraints_panel--centerX]:after,[class*=constraints_panel--centerY]:after,[class*=constraints_panel--right]:after,[class*=slider--sliderThumb],[class*=slider--sliderIndicator]{background:var(--bg-lightest)}[class*=constraints_panel--centerX],[class*=constraints_panel--centerY]{border-color:var(--bg-lightest)}[class*=slider--sliderThumbInactive]{background:var(--txt-disabled)}[class*=basic_form--checkbox]:after,[class*=raw_components--iconButton]:hover{background-color:var(--bg-darkest)}[class*=raw_components--iconButtonBordered]{border:1px solid var(--bg-light)}[class*=basic_form--checkbox]:after,[class*=raw_components--border],[class*=raw_components--modalPanel] [class*=raw_components--input]{border-color:transparent}[class*=raw_components--border]:focus{border-color:var(--bg-active)!important}[class*=raw_components--rowSelected]{background-color:var(--bg-lightest)}[class*=select--inputDisabled]{color:var(--txt-disabled)!important;fill:var(--txt-disabled)!important}[class*=combo_box--input]{border-right-color:var(--bg-base)}[class*=combo_box--select] [class*=raw_components--border]:focus{border-color:var(--bg-active)!important}[class*=basic_form--btn]:focus{border:2px solid var(--bg-active)}[class*=basic_form--btn]:disabled{color:var(--txt-disabled)!important}[class*=team--folderLastUpdated],[class*=basic_form--bigTextInput]::placeholder,[class*=team_creation--authorizeSlack],[class*=step_pay--smallGrayText],[class*=importPrompt],[class*=export_picker--settingsInfo],[class*=memberCount],[class*=team_upgrade--stepNumber],[class*=sidebar--emptyText],[class*=frame_presets--presetDimensions],[class*=team_upgrade--step-],[class*=export_picker--warning],[class*=raw_components--textInput]::placeholder,[class*=raw_components--iconButton][class*=raw_components--iconButtonDisabled],[class*=raw_components--iconButton][class*=raw_components--iconButtonOff],[class*=basic_form--textInput]::placeholder{color:var(--txt-disabled)}[class*=properties_panel--activeTab],[class*=user_notifications_dropdown--dropdownContainer] [class*=row--row]:last-child{border-bottom:0}[class*=local_components--tileSeparator],[class*=permissions_modal--dividedInputSection],[class*=type_settings--topBorder]{border-top:1px solid var(--bg-dark)}[class*=history_view--textButton]{border-color:var(--bg-active)}[class*=object_row--topLevel][class*=object_row--selected][class*=object_row--symbol-]{border-color:var(--txt-symbol)}[class*=object_row--symbol-]>*,[class*=object_row--instance]>*,[class*=object_row--instanceChild]>*{color:var(--txt-symbol);fill:var(--txt-symbol)}[class*=object_row--symbol-] svg,[class*=object_row--instance] svg,[class*=object_row--instanceChild] svg{fill:var(--txt-symbol)}[class*=object_row--symbol-] [class*=object_row--customLayerIcon],[class*=object_row--instance] [class*=object_row--customLayerIcon],[class*=object_row--instanceChild] [class*=object_row--customLayerIcon]{stroke:var(--txt-symbol)}[class*=object_row--selected][class*=object_row--disabled] *,[class*=object_row--disabled] *{color:var(--txt-disabled)!important}[class*=object_row--selected][class*=object_row--disabled] svg,[class*=object_row--disabled] svg{fill:var(--txt-disabled)!important}[class*=object_row--row][class*=object_row--selected][class*=object_row--disabled] [class*=object_row--customLayerIcon],[class*=object_row--row][class*=object_row--disabled] [class*=object_row--customLayerIcon]{stroke:var(--txt-disabled)!important}[class*=object_row--row] [class*=object_row--customLayerIcon]{stroke:var(--bg-lightest)}[class*=object_row--row][class*=object_row--instance][class*=object_row--parentSelected],[class*=object_row--row][class*=object_row--instanceChild][class*=object_row--parentSelected],[class*=object_row--row][class*=object_row--parentSelected],[class*=object_row--row][class*=object_row--symbolChild][class*=object_row--parentSelected],[class*=object_row--row][class*=object_row--symbol][class*=object_row--parentSelected]{background:var(--st-rowRowSelected)}[class*=object_row--row][class*=object_row--parentSelected]>*{color:var(--txt-label)!important;fill:var(--txt-label)!important;stroke:var(--txt-label)!important}[class*=object_row--row][class*=object_row--symbol-][class*=object_row--parentSelected]>*,[class*=object_row--row][class*=object_row--instance][class*=object_row--parentSelected]>*,[class*=object_row--row][class*=object_row--instanceChild][class*=object_row--parentSelected]>*{color:var(--txt-symbol)!important;fill:var(--txt-symbol)!important;stroke:var(--txt-symbol)!important}[class*=object_row--input]{color:var(--txt-label)!important}[class*=left_panel--tabs]{box-shadow:inset 0 1px 0 0 var(--bg-dark)}[class*=local_components--headerWithBorder]{border-bottom-color:var(--bg-dark)}[class*=local_components--pageName]{border-bottom-color:var(--bg-base)}[class*=local_components--menu]:hover,[class*=user_notifications_dropdown--dropdownContainer]{background:var(--bg-darkest)}[class*=scroll_container--trackDragging]{border-left:1px solid var(--bg-base);background:0 0}[class*=scroll_container--track]:hover{border-left:1px solid var(--bg-dark)}[class*=sidebar_library--searchInputEmpty]:hover,[class*=sidebar_library--navItem]:hover{background-color:var(--bg-light)}[class*=draggable_modal--header] [class*=file_move--searchInput]{background-color:transparent}[class*=publishing_modal--footer]{border-top:1px solid var(--bg-base)}[class*=object_row--selected] *,[class*=pages_panel--pageRowSelected] [class*=pages_panel--renameableNode]:hover [class*=pages_panel--pageNumberOfHoveredInverse],[class*=recent_files_link--selectedRecentFiles]>*,[class*=deleted_files_link--selectedDeletedFiles]>*,[class*=folder_link--selectedFolderLink]>*,[class*=basic_form--primaryBtn],[class*=file_move--folderRowWrapperFocused]{color:#fff!important}[class*=publishing_modal--footer],[class*=toolbar_view--toolbar],[class*=filename_view--pageTitle]{background-color:var(--bg-dark)}[class*=basic_form--primaryBtn]{border:1px solid var(--bg-active)}[class*=basic_form--primaryBtn]:active,[class*=basic_form--primaryBtn]:focus{background:var(--st-ActivePressed)}[class*=raw_components--squareRightBorder]{border-right:1px solid var(--bg-base)!important}[class*=history_view--itemActive]:after{border-left-color:var(--bg-active)}[class*=history_view--itemInfo]:hover{background-color:var(--bg-dark)!important}[class*=raw_components--panel-]{transition:height .3s ease-out}.is-closed{height:36px;overflow:hidden}.is-closed [class*=raw_components--panelTitle]{color:var(--bg-lightest)}[class*=role_row--select]{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSI2IiB2aWV3Qm94PSIwIDAgOSA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICA8ZyBkYXRhLW5hbWU9IkNhbnZhcyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIyODEyIC0xMTgwOCkiIGZpbGw9Im5vbmUiPiAgICAgICAgPGcgZGF0YS1uYW1lPSJWZWN0b3IgNyAoU3Ryb2tlKSI+ICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjI4MTIuNiAxMTgwOC42KSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgwIiBmaWxsPSIjNjY2NjY2IiBmaWxsLW9wYWNpdHk9IjEiLz4gICAgICAgICAgICA8L2c+ICAgICAgICA8L2c+ICAgIDwvZz4gICAgPGRlZnM+ICAgICAgICA8cGF0aCBpZD0icGF0aDAiIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNIDAgMC43MDcxMDdMIDAuNzA3MTA3IDBMIDMuODUzNTUgMy4xNDY0NUwgNyAwTCA3LjcwNzExIDAuNzA3MTA3TCAzLjg1MzU1IDQuNTYwNjZMIDAgMC43MDcxMDdaIi8+ICAgIDwvZGVmcz48L3N2Zz4=)}');

        style.id = 'f-ui';
        style.appendChild(css);

        document.head.appendChild(style);
    } else {
        let style = document.getElementById('f-ui');
        document.head.removeChild(style);
    }
}


/* -----------------------------------------------------------------------------
    ON RUN
------------------------------------------------------------------------------*/

allocPanel();

function allocPanel() {
    let checkExist = setInterval(function(){
        if (document.querySelector('.toolbar_view--toolbar--2396w') || document.querySelector('.top_bar--headerChildren--2jBsO')) {
            onRun();
            clearInterval(checkExist);
            console.log('[FIGJET]: Loading Complete');
        }
    }, 1000);
}
